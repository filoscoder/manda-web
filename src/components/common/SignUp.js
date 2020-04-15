import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Auth } from "../../setup/firebase";
import { Form, Input, Button, Select, message } from "antd";

const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const SignUp = withRouter(({ history, props }) => {
  const [isLoading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }} value={"010"}>
        <Option value="010">010</Option>
        <Option value="070">070</Option>
      </Select>
    </Form.Item>
  );

  const onFinish = (values) => {
    setLoading(true);
    console.log(values);
    setTimeout(() => {
      Auth.createUserWithEmailAndPassword(values.email, values.password)
        .then((cred) => {
          if (cred.user) {
            console.log("[SIGN-UP] => User signed up!");
            history.push("/");
            setLoading(false);
          }
        })
        .catch((error) => {
          // Handle Errors here.
          console.log("!Error[SIGN-UP] => ", error);
          message.error(error.message);
          setLoading(false);
        });
    }, 1000);
  };

  const onReset = () => {
    form.resetFields();
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
        <h1>Test-Auth-SignUp</h1>
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
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item
            name="email"
            label="이매일"
            rules={[{ required: true, message: "[이메일]을 입력하세요!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="비밀번호"
            rules={[{ required: true, message: "[비밀번호]를 입력하세요!" }]}
          >
            <Input type="password" placeholder="비밀번호를 입력해주세요" />
          </Form.Item>
          <Form.Item name="name" label="이름" rules={[{}]}>
            <Input />
          </Form.Item>

          <Form.Item name="location" label="위치">
            <Select placeholder="위치를 선택하세요" allowClear>
              <Option value="13층">13층</Option>
              <Option value="14층">14층</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="phone"
            label="전화번호"
            rules={[{ message: "Please input your phone number!" }]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{ width: "100%" }}
              placeholder="숫자만 입력하세요"
            />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" loading={isLoading}>
              가입하기
            </Button>
            <Button htmlType="button" onClick={onReset}>
              초기화
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
});

export default SignUp;
