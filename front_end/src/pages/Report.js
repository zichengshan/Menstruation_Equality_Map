import React, { useState, useEffect } from "react";
import { Button, Input } from "antd";
import { reportEmpty } from "../request/api";
import "./Report.css";
const { TextArea } = Input;

function Report() {
  
  const [restroomId, setRestroomId] = useState("0");
  const [buildingName, setBuildingName] = useState("");
  const [floorName, setfloorName] = useState("");
  const [restroomNum, setRestroomNum] = useState("");

  const submitReport = () => {
    fetch('http://localhost:8080/report-miss?' + new URLSearchParams({
      restroom_id : parseInt(restroomId)
                }))
                .then(alert("Submitted Successfully!"))
                
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
      <div className="Header">
        <h1
          style={{
            color: "white",
            textAlign: "center",
          }}
        >
          Report Page
        </h1>
      </div>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <span>{restroomNum} - floor: {floorName} - {buildingName}</span>
        <div>
          <span>If the product is empty, please click "submit"!</span>
        </div>
        <Button type="primary" htmlType="submit" onClick={submitReport}>
          Submit
        </Button>
      </div>
    </div>
  );
}
export default Report;
