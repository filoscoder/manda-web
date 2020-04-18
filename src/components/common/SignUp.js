// App & package imports
import React, { useState, useContext } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { AuthContext } from "../../helpers/Auth";
import { signUpUserWithEmailAndPasswordApi } from "../../api/signup";
// Style & UI Framework imports
import { Form, Input, Button } from "antd";

const layout = {
  labelCol: {
    span: 10,
  },
  wrapperCol: {
    span: 5,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 16,
  },
};

/**
 * * [Component]
 * @param history : object => from withRouter
 * @param props : object => could be undefined
 */
const SignUp = ({ history, props }) => {
  /**
   * * [Initialize]
   */
  const [form] = Form.useForm();
  const { currentUser } = useContext(AuthContext);
  const [isLoading, setLoading] = useState(false);

  /**
   * * [onSubmitForm]
   * TODO: refactor => module Auth related method
   * @param values : object => all input values
   */
  const onSubmitForm = (signupData) => {
    setLoading(true);
    console.log(signupData);
    setTimeout(() => {
      setLoading(false);
      signUpUserWithEmailAndPasswordApi(signupData);
      history.push("/");
    }, 900);
  };

  /**
   * * [onResetForm]
   */
  const onResetForm = () => {
    form.resetFields();
  };

  /**
   * * [Render]
   * ! if there is a ${currentUser} redirect to "/"
   * ? Allowing to get all personal data from users? (only email & pw?)
   * TODO: refactor UI
   * @param currentUser : provided by AuthContext
   */

  if (currentUser) {
    return <Redirect to="/" />;
  } else {
    return (
      <>
        <div
          style={{
            textAlign: "center",
            fontSize: "2rem",
            marginTop: "90px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h1>SignUp</h1>
        </div>
        <div
          style={{
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Form
            {...layout}
            form={form}
            name="signup-form"
            onFinish={onSubmitForm}
            colon={false}
          >
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message:
                    "Please enter an avaiable [email]. We will send you a verification link!",
                },
              ]}
            >
              <Input placeholder="my-email@com.com" />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please enter at least 6 characters",
                },
              ]}
            >
              <Input.Password type="password" placeholder="my-password" />
            </Form.Item>
            <Form.Item
              name="nickname"
              label="Nickname"
              rules={[{ required: true }]}
            >
              <Input placeholder="How do we call you?" />
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit" loading={isLoading}>
                가입하기
              </Button>
              <Button htmlType="button" onClick={onResetForm}>
                초기화
              </Button>
            </Form.Item>
          </Form>
        </div>
      </>
    );
  }
};

export default withRouter(SignUp);
