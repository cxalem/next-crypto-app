import React, { useState } from "react";
import { useAccount, useConnect } from "wagmi";

const CryptoContext = React.createContext();

const CryptoProvider = ({ children }) => {

  //Price Format
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-EN", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  //Truncate Strings
  const truncateString = (str) => {
    if (str.length > 10) {
      return str.slice(0, 10) + "...";
    } else {
      return str;
    }
  }

  //Searchbar
  const [search, setSearch] = useState("");
  const onSearchValue = (e) => {
    setSearch(e.target.value);
  };

  //Connect Wallet
  const [loading, setLoading] = useState(false);
  const [{ data: connectData }, connect] = useConnect();
  const [{ data: accountData }, disconnect] = useAccount({
    fetchEns: true,
  });
  const handleConnect = async () => {
    setLoading(true);
    await connect(connectData.connectors[0]);
      setLoading(false);
  };

  return (
    <CryptoContext.Provider
      value={{
        formatPrice,
        search,
        onSearchValue,
        accountData,
        loading,
        handleConnect,
        disconnect,
        truncateString
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};

export { CryptoContext, CryptoProvider };
