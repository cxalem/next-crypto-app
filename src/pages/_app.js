import { Layout } from "../components/Layout/Layout";
import "../styles/globals.css";
import { CryptoProvider } from "../CryptoContext/CryptoContex";
import { Provider, defaultChains } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

const connectors = () => {
  return [
    new InjectedConnector({
      defaultChains,
      options: { shimDisconnect: true },
    }),
  ];
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider autoConnect connectors={connectors}>
        <CryptoProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CryptoProvider>
      </Provider>
    </>
  );
}

export default MyApp;
