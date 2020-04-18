// App & package imports
import React, { useState, useContext } from "react";
import { withRouter, Link, Redirect } from "react-router-dom";
import { Auth } from "../../setup/firebase";
import { AuthContext } from "../../helpers/Auth";
// Style & UI Framework imports
import { Form, Input, Button, message, Tag } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import background from "../../assets/login-back.jpeg";

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
          fontSize: "2.3rem",
          marginLeft: "auto",
          marginRight: "auto",
          minHeight: "inherit",
          backgroundSize: "cover",
          backgroundPosition: "center center no-repeat",
          backgroundImage: `url(${background})`,
        }}
      >
        <div style={{ color: "#3b3a3f", padding: "50px" }}>
          <h1>Welcome to Manda-web!</h1>
          <h6>Please login with your email and password</h6>
        </div>

        <Form
          {...layout}
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={onSubmitForm}
          style={{
            display: "inline-block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          hideRequiredMark
          colon={false}
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
          <Form.Item {...tailLayout}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              loading={isLoading}
            >
              Log in
            </Button>
            <br />
            <br />
          </Form.Item>
          or{" "}
          <Link to="/signup">
            <Tag color="#3b5999" style={{ cursor: "pointer" }}>
              Sign-up
            </Tag>
          </Link>
          here!
        </Form>
      </div>
    );
  }
};

export default withRouter(LogIn);
