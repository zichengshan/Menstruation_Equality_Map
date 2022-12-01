import { Cascader, Button } from 'antd';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
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
        setRestroomId(value[2]);
    };

    const generateQrCode = (value) => {
        navigate("/qrcode/qrcodegeneration", { state: roomInfo })
    }

    const displayRender = (labels) => labels[labels.length - 1];

    return (
        <div>
            <div style={{
                backgroundColor: "#0064a4"
            }}>
                <h1 style={{
                    color: "white",
                    textAlign: "center",
                    backgroundColor: "#0064a4"
                }}>
                    QR code generation page
                </h1>
            </div>
            <div className='qr--body'>
                <Cascader size="large" className='qr--Cascader'
                    options={buildingList}
                    expandTrigger="hover"
                    displayRender={displayRender}
                    onChange={onChange}
                />
                <Button type="primary" size="large" className='qr--button' onClick={generateQrCode}>
                    Generate QR Code
                </Button>
            </div>
        </div>
    );
};
export default Qrcode;