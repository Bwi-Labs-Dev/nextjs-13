"use client";

import React from "react";
import { Button, message, Space } from "antd";

const ButtonMessage: React.FC = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "This is a success message success implement antd",
    });
  };

  return (
    <>
      {contextHolder}
      <Space>
        <Button onClick={success} type="primary" danger>Click Me</Button>
      </Space>
    </>
  );
};

export default ButtonMessage;
