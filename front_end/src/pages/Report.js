import React from "react";
import { Button, Form, Input } from "antd";
import "./Report.css";
const { TextArea } = Input;

function Report() {
  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };

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
        <TextArea
          maxLength={400}
          rows={7}
          className="comments"
          onChange={onChange}
          placeholder="You can leave some comments here (max 400 characters)"
          style={{
            width: "60%",
            resize: "horizontal",
            // left:"10px"
          }}
        />
        <div>
          <span>If the product is empty, please click "submit"!</span>
        </div>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </div>
    </div>
  );
}
export default Report;
