import { Layout } from "../components/Layout/Layout";
import "../styles/globals.css";
import { CryptoProvider } from "../CryptoContext/CryptoContex";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CryptoProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CryptoProvider>
    </>
  );
}

export default MyApp;
