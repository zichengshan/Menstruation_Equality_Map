import React from "react";
import { Layout, Button, Form, Input } from "antd";
import "./Report.css"
const { TextArea } = Input;
const { Header, Content } = Layout;

function Report() {
  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };
  const restroomInfo = {
    building_name: "Lib",
    floor_name: "2",
    restroom_id: 1,
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
      <Layout style={{
        height:"100vh"
      }}>
        <Header className="Header">
          <h1 style={{
            color:"white",
            textAlign:"center"
          }}>
            Report Page
            </h1>
        </Header>
        <Content style={{textAlign:"center"}}>
          <span >
            {restroomInfo.building_name} - floor: {restroomInfo.floor_name}
          </span>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item name="Comment">
              <TextArea
                showCount
                maxLength={400}
                rows={7}
                className="comments"
                onChange={onChange}
                placeholder="You can leave some comments here (max 400 characters)"
            
                style={{
                    width:"80%",
                    margin:"0 auto",
                    resize:"horizontal",
                    left:"10px"
                }}
              />
            </Form.Item>

            <span>If the product is empty, please click "submit"!</span>

            <Form.Item
              wrapperCol={{
                
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Content>
      </Layout>
  );
}
export default Report;
