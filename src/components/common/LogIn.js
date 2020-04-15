import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";
import { Auth } from "../../setup/firebase";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const LogIn = withRouter(({ history, props }) => {
  const [isLoading, setLoading] = useState(false);
  const onFinish = (values) => {
    setLoading(true);
    console.log("Received values of form: ", values);
    setTimeout(() => {
      Auth.signInWithEmailAndPassword(values.username, values.password)
        .then((cred) => {
          if (cred.user) {
            console.log("[LOG-IN] => User logged in!");
            history.push("/");
            setLoading(false);
          }
        })
        .catch((error) => {
          // Handle Errors here.
          console.log("!Error[LOG-IN] => ", error);
          message.error(error.message);
          setLoading(false);
        });
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      <div
        style={{
          fontSize: "2rem",
          marginTop: "90px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h1>Test-Auth-LogIn</h1>
      </div>
      <div
        className="login-form"
        style={{
          textAlign: "center",
          marginTop: "50px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "[이메일]을 입력하세요!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "[비밀번호]를 입력하세요!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              loading={isLoading}
            >
              로그인
            </Button>
            <br />
            <br />
            Or{" "}
            <Link to="/signup">
              <a href="">[회원가입]하기!</a>
            </Link>
          </Form.Item>
        </Form>
      </div>
    </>
  );
});

export default LogIn;
