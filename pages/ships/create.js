import Head from "next/head";
import { Form, Input, Button, Select } from "antd";
import { useSWRConfig } from "swr";
import { Rarity, Type } from "../../configs/constants";
import api from "../../utils/api";

const CreateShip = () => {
  const { mutate } = useSWRConfig();

  const onFinish = async (values) => {
    try {
      await api.post("/ships", { ship: values });
      mutate("/ships");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Head>
        <title>Azur List - Create Ship</title>
      </Head>
      <Form name="ship" onFinish={onFinish} layout="vertical">
        <Form.Item label="Id" name="id" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Name" name="name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Rarity" name="rarity" rules={[{ required: true }]}>
          <Select>
            {Object.entries(Rarity).map(([key, value]) => (
              <Select.Option key={key} value={key}>
                {value}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Type" name="type" rules={[{ required: true }]}>
          <Select>
            {Object.entries(Type).map(([key, value]) => (
              <Select.Option key={key} value={key}>
                {value}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreateShip;
