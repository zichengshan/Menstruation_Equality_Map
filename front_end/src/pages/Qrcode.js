import { Cascader, Button } from 'antd';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Navigate, NavLink } from 'react-router-dom';
import 'antd/dist/antd.css'
import "./Qrcode.css"
import { selectBuilding } from '../request/api';



function Qrcode() {
    const [buildingList, setBuildingList] = useState([])
    const [roomInfo, setRestroomId] = useState([])
    const navigate = useNavigate();

    let options = [];

    const getSelectBuilding = () => {
        selectBuilding().then(
            res => {
                let newArr = JSON.parse(JSON.stringify(res))
                for (let i = 0; i < newArr.length; i++) {
                    let children1 = [];
                    options[i] = { value: newArr[i].name, label: newArr[i].name, children: children1 }
                    for (let j = 0; j < newArr[i].floors.length; j++) {
                        let children2 = [];
                        children1[j] = { value: newArr[i].floors[j].name, label: newArr[i].floors[j].name, children: children2 }
                        for (let k = 0; k < newArr[i].floors[j].restrooms.length; k++) {
                            const roomInfo = { building_name: newArr[i].name, floor_name: newArr[i].floors[j].name, restroom_id: newArr[i].floors[j].restrooms[k].restroomId, restroom_num: newArr[i].floors[j].restrooms[k].roomNum }
                            children2[k] = { value: roomInfo, label: newArr[i].floors[j].restrooms[k].roomNum }
                            console.log(roomInfo)
                        }
                    }
                }
                setBuildingList(options);


            }
        )
    }

    useEffect(() => {
        getSelectBuilding()
    }, []);


    const onChange = (value) => {
        console.log(value[2]);
        console.log(value)
        setRestroomId(value[2]);
    };

    const generateQrCode = (value) => {
        console.log(roomInfo)
        navigate("/qrcode/qrcodegeneration", { state: roomInfo })
    }

    const displayRender = (labels) => labels[labels.length - 1];

    return (
        <div >
            <div className="Header" style={{
                backgroundColor: "#0064a4"
            }}>
                <h1 style={{
                    color: "white",
                    textAlign: "center",
                    backgroundColor: "#0064a4"
                }}>
                    QR Code Generate Page
                </h1>
            </div>
            <Cascader size="large" className='Cascader'
                options={buildingList}
                expandTrigger="hover"
                displayRender={displayRender}
                onChange={onChange}
            />
            <span>
                <Button type="primary" size="large" className='text--generation' onClick={generateQrCode}>
                    Generate QR Code
                </Button>
            </span>

        </div>
    );
};
export default Qrcode;