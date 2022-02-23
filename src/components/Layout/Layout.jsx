import { Header } from '../Header/Header';
import Head from "next/head";

const Layout = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="" />
      </Head>

      <Header />

      <main>{children}</main>
    </>
  );
};

Layout.defaultProps = {
  title: "Devam | CryptoApp",
  description: "Find your crypto asset",
};

export { Layout };
