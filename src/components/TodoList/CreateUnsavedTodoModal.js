import React from "react";
import { Form, Input, Modal } from "antd";

import { useCreateUnsavedTodo } from "../../api/useCreateUnsavedTodo";

const CreateUnsavedTodoModal = ({ open, onOk, onCancel, date }) => {
  const { mutate: createUnsavedTodo } = useCreateUnsavedTodo();
  const [form] = Form.useForm();

  const handleFinish = (values) => {
    const createdAt = date.valueOf();
    createUnsavedTodo({ ...values, createdAt });
  };

  return (
    <Modal
      destroyOnClose
      okText="Create"
      cancelText="Cancel"
      okButtonProps={{
        autoFocus: true,
        htmlType: "submit",
      }}
      onOk={onOk}
      open={open}
      onCancel={onCancel}
      modalRender={(dom) => {
        return (
          <Form
            layout="vertical"
            form={form}
            name="form_in_modal"
            clearOnDestroy
            onFinish={handleFinish}
          >
            {dom}
          </Form>
        );
      }}
      title="Create Todo"
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Title is required" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: "Description is required" }]}
      >
        <Input />
      </Form.Item>
    </Modal>
  );
};

export default CreateUnsavedTodoModal;
