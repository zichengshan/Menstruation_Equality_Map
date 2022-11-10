import React, { Component } from 'react'
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import qrcode from './qrcode.png'
import "./QrcodeGeneration.css"

export default class QrcodeGeneration extends Component {
  render() {
    return (
      <div className='position'>
        <div className='Header'>
          <h1 style={{
            color: "white",
            textAlign: "center"
          }}>
            QR Code Generation Page
          </h1>
        </div>
        <a >
          <img src={qrcode} className='qrcode--position' />
        </a>
        <br></br>
        <Button type="primary" shape="round" icon={<DownloadOutlined />} size="large" href={qrcode} download="QR_Code.png">
          Download
        </Button>
      </div>
    )
  }
}
