import React, { useState, useEffect } from "react";
import { Button } from "antd";
import "./Report.css";

function Report() {
  
  const [restroomId, setRestroomId] = useState("0");
  const [buildingName, setBuildingName] = useState("");
  const [floorName, setfloorName] = useState("");
  const [restroomNum, setRestroomNum] = useState("");

  const submitReport = () => {
    fetch('http://ec2-54-214-227-92.us-west-2.compute.amazonaws.com:8080/report-miss?' + new URLSearchParams({
      restroom_id : parseInt(restroomId)
                }))
                .then(res => res.json())
                .then (data => alert(data.message))
                
                
  }
  useEffect(() => {
    setRestroomId(getQueryVariable("restroom_id"));
    setRestroomNum(getQueryVariable("restroom_num"));
    setfloorName(getQueryVariable("floor_name"));
    setBuildingName(getQueryVariable("building_name"));
  }, []);
  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (pair[0] === variable) {
        return pair[1];
      }
    }
    return false;
  }
  return (
    <div class="wrapall">
      <div className="Header" style={{
          backgroundColor: "#0064a4"

      }}>
        <h1
          style={{
            color: "white",
            textAlign: "center",
            backgroundColor: "#0064a4"
          }}
        >
          Report Empty Menstruation Products Page
        </h1>
      </div>
      <div style={{ textAlign: "center", marginTop: "50px", fontSize: "20px"}}>
        <span>{restroomNum?restroomNum.replaceAll("_"," "):restroomNum} - floor: {floorName} - {buildingName?buildingName.replaceAll("_"," "):buildingName}</span>
        <div>
          <span className="report--span">If the product is empty, please click "submit"!</span>
        </div>
        <Button type="primary" htmlType="submit" onClick={submitReport} style={{
          marginTop: "30px",
          width:"300px",
          height:"40px"
        }}>
          Submit
        </Button>
      </div>
    </div>
  );
}
export default Report;
