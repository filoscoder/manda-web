import React from "react";
import { createNewTodoApi } from "../../api/todos";

import { Form, Input, Button, Select } from "antd";
const { TextArea } = Input;
const { Option } = Select;

const TodoNew = (props) => {
  const [form] = Form.useForm();

  const onChangePriority = (value) => {
    form.setFieldsValue({ todoPriority: `${value}` });
  };

  const onFinish = (values) => {
    values["todoDate"] = props.selectedDate;
    values["mode"] = props.selectedMode;
    values["type"] = props.type;
    console.log(values);
    console.log(new Date());
    createNewTodoApi(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
      form={form}
      name={`${props.type}-form`}
      layout={"vertical"}
      colon={false}
      onFinish={onFinish}
      initialValues={{
        todoPriority: "normal",
      }}
    >
      <Form.Item name="todoContent" label="To-do">
        <TextArea allowClear autoSize={{ minRows: 2, maxRows: 6 }} />
      </Form.Item>
      <Form.Item name="tags" label="Tags" rules={[{ type: "array" }]}>
        <Select mode="tags" size="small" placeholder="Please enter your tags" />
      </Form.Item>
      <Form.Item
        name="todoPriority"
        label="Priority"
        rules={[{ enum: ["high", "normal", "low"] }]}
      >
        <Select placeholder="Select the priority" onChange={onChangePriority}>
          <Option value="high">High</Option>
          <Option value="normal">Normal</Option>
          <Option value="low">Low</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{ background: "#55ba5c", color: "white", border: "none" }}
        >
          Save
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TodoNew;
