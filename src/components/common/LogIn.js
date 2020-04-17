// App & package imports
import React, { useState, useContext } from "react";
import { withRouter, Link, Redirect } from "react-router-dom";
import { Auth } from "../../setup/firebase";
import { AuthContext } from "../../helpers/Auth";
// Style & UI Framework imports
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const layout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 16,
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
const LogIn = ({ history, props }) => {
  /**
   * * [Initialize]
   */
  const { currentUser } = useContext(AuthContext);
  const [isLoading, setLoading] = useState(false);

  /**
   * * [onSubmitForm]
   * TODO: refactor => module Auth related method
   * @param values : object => all input values
   */
  const onSubmitForm = (values) => {
    setLoading(true);
    console.log("Received values of form: ", values);
    setTimeout(() => {
      Auth.signInWithEmailAndPassword(values.email, values.password)
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

  /**
   * * [Render]
   * ! if there is a ${currentUser} redirect to "/"
   * TODO: need to add "Remember me" feature
   * @param currentUser : provided by AuthContext
   */
  if (currentUser) {
    return <Redirect to="/" />;
  } else {
    return (
      <div
        style={{
          textAlign: "center",
          fontSize: "2rem",
          marginTop: "90px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h1>Test-Auth-LogIn</h1>
        <div>
          <Form
            {...layout}
            name="login-form"
            initialValues={{ remember: true }}
            onFinish={onSubmitForm}
            style={{
              display: "inline-block",
              marginTop: "50px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Form.Item
              name="email"
              label="Username"
              rules={[{ required: true, message: "Please enter your [email]" }]}
            >
              <Input prefix={<UserOutlined />} placeholder="my-email@com.com" />
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
              <Input.Password
                prefix={<LockOutlined />}
                type="password"
                placeholder="my-password"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                loading={isLoading}
              >
                Login
              </Button>
              <br />
              <br />
              or{" "}
              <Link to="/signup">
                <a href="">[Sign-up] here!</a>
              </Link>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
};

export default withRouter(LogIn);
