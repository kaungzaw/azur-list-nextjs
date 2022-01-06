import "../styles/globals.css";
import { SWRConfig } from "swr";
import BaseLayout from "../components/BaseLayout";
import api from "../utils/api";

const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  const fetcher = (url) => api.get(url).then((res) => res.data);

  return getLayout(
    <SWRConfig value={{ fetcher }}>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </SWRConfig>
  );
};

export default MyApp;
