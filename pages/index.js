import Head from "next/head";
import { Typography } from "antd";

const { Title } = Typography;

const Home = () => {
  return (
    <>
      <Head>
        <title>Azur List - Welcome</title>
      </Head>
      <Title level={4}>Welcome to Azur List</Title>
    </>
  );
};

export default Home;
