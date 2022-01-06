import { useRouter } from "next/router";
import Link from "next/link";
import { Layout, Menu, Typography } from "antd";
import styles from "./BaseLayout.module.css";

const { Header, Content } = Layout;
const { Title } = Typography;

const BaseLayout = ({ children }) => {
  const router = useRouter();

  return (
    <Layout>
      <Header style={{ padding: "0px 20px" }}>
        <Title level={3} className={styles.logo}>
          Azur List
        </Title>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[router.asPath.split("/")[1] || "/"]}
        >
          <Menu.Item key="/">
            <Link href="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="ships">
            <Link href="/ships">Ships</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <div className={styles.site_layout_content}>{children}</div>
      </Content>
    </Layout>
  );
};

export default BaseLayout;
