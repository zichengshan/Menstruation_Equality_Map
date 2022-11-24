import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'antd';
import "./QrcodeGeneration.css"
import { useLocation } from "react-router-dom";

function QrcodeGeneration() {
  const location = useLocation();

  const [restroom, setRestroom] = useState([])
  const [restroominfo, setRestroominfo] = useState([])
  useEffect(() => {
    const params = "building_name=" + location.state.building_name + "&floor_name=" + location.state.floor_name + "&restroom_id=" + location.state.restroom_id + "&restroom_num=" + location.state.restroom_num
    setRestroom("http://localhost:8080/qrcode?" + params)
    setRestroominfo(location.state.building_name + " -- " + location.state.floor_name + " floor -- " + location.state.restroom_num)
  }, []);

  const print = () => {
    window.document.innerHTML = window.document.getElementById('content').innerHTML;
    window.print();
    window.location.reload();
  }

  console.log(location.state)
  return (
    <div className='position'>
      <div className="Header" style={{
        backgroundColor: "#0064a4"
      }}>
        <h1 style={{
          color: "white",
          textAlign: "center",
          backgroundColor: "#0064a4"
        }}>
          QR Code Generation Page
        </h1>
      </div>
      <div id='content' >
        <div className='info--position'>
          {restroominfo}
        </div>
        <img src={restroom} className='qrcode--position' />
      </div>
      <br></br>
      <Button type="primary" shape="round" size="large" onClick={() => print()}>
        Print
      </Button>
    </div>
  )
}

export default QrcodeGeneration;