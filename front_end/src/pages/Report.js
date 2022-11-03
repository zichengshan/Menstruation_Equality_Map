import Navbar from "../components/Navbar";
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
    <div className="Report">
      <Layout>
        <Header className="Header">
          <Navbar />
        </Header>
        <Content>
          <span>
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
            <Form.Item label="Comment" name="Comment" >
              {/* <Input placeholder="You can leave some comments here" /> */}
              <TextArea
                showCount
                maxLength={400}
                rows={7}
                className="comments"
                onChange={onChange}
                placeholder="You can leave some comments here"
              />
            </Form.Item>

            <span>If the product is empty, please click "submit"!</span>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Content>
      </Layout>
    </div>
  );
}
export default Report;
