import Head from "next/head";
import { Typography } from "antd";

const { Title } = Typography;

const ShipById = () => {
  return (
    <>
      <Head>
        <title>Azur List - Ship</title>
      </Head>
      <Title level={4}>Ship By Id</Title>
    </>
  );
};

export default ShipById;
