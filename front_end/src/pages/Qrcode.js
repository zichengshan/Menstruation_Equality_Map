import { Cascader, Button } from 'antd';
import React from 'react';
import { NavLink } from 'react-router-dom';
import 'antd/dist/antd.css'
import "./Qrcode.css"

const options = [
    {
        value: 'Langson library',
        label: 'Langson library',
        children: [
            {
                value: 'Floor1',
                label: 'Floor1',
                children: [
                    {
                        value: 'restroom1',
                        label: 'restroom1',
                    },
                    {
                        value: 'restroom2',
                        label: 'restroom2',
                    },
                ],
            },
            {
                value: 'Floor2',
                label: 'Floor2',
                children: [
                    {
                        value: 'restroom1',
                        label: 'restroom1',
                    },
                ],
            },
            {
                value: 'Floor3',
                label: 'Floor3',
                children: [
                    {
                        value: 'restroom1',
                        label: 'restroom1',
                    },
                ],
            },
        ],
    },
    {
        value: 'Jack Library',
        label: 'Jack Library',
        children: [
            {
                value: 'Floor2',
                label: 'Floor2',
                children: [
                    {
                        value: 'restroom1',
                        label: 'restroom1',
                    },
                ],
            },
        ],
    },
];
const onChange = (value) => {
    console.log(value);
};

// Just show the latest item.
const displayRender = (labels) => labels[labels.length - 1];
const Qrcode = () => (
    <div >
        <div className='Header'>
            <h1 style={{
                color: "white",
                textAlign: "center"
            }}>
                Report Page
            </h1>
        </div>
        <Cascader size="large" className='Cascader'
            options={options}
            expandTrigger="hover"
            displayRender={displayRender}
            onChange={onChange}
        />
        <span>
            <NavLink to="/qrcode/qrcodegeneration">
                <Button type="primary" size="large" className='text--generation'>
                    Generate QR Code
                </Button>
            </NavLink>
        </span>

    </div>
);
export default Qrcode;