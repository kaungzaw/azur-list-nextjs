import Head from "next/head";
import Link from "next/link";
import { Typography, Table, Button, Modal, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useSWRConfig } from "swr";
import { Rarity, Type } from "../../configs/constants";
import { useGetAllShips } from "../../hooks/ships";
import api from "../../utils/api";
import ErrorDisplay from "../../components/ErrorDisplay";

const { Title } = Typography;

const Ships = () => {
  const { ships, loading, error } = useGetAllShips();
  const { mutate } = useSWRConfig();

  const handleDelete = ({ id, name }) => {
    Modal.confirm({
      title: "Do you want to delete this ship?",
      icon: <ExclamationCircleOutlined />,
      content: (
        <>
          <div>{`Id: ${id}`}</div>
          <div>{`Name: ${name}`}</div>
        </>
      ),
      onOk: async () => {
        try {
          await api.delete(`/ships/${id}`);
          mutate(
            "/ships",
            ships.filter((ship) => ship.id !== id),
            false
          );
        } catch (error) {
          message.error(error.toString());
        }
      },
      onCancel() {},
    });
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Rarity",
      dataIndex: "rarity",
      key: "rarity",
      render: (rarity) => Rarity[rarity],
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      render: (type) => Type[type],
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Button type="danger" onClick={() => handleDelete(record)}>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>Azur List - Ships</title>
      </Head>
      <Title level={4}>List of Ships</Title>
      <Button type="primary">
        <Link href="/ships/create">Create Ship</Link>
      </Button>
      <br />
      <br />
      {error ? (
        <ErrorDisplay error={error} />
      ) : (
        <Table
          columns={columns}
          dataSource={ships}
          rowKey="id"
          loading={loading}
          size="middle"
          bordered
        />
      )}
    </>
  );
};

// export async function getStaticProps() {
//   const prisma = new PrismaClient();
//   const ships = await prisma.ship.findMany();

//   return {
//     props: {
//       ships,
//     },
//     revalidate: 10,
//   };
// }

export default Ships;
