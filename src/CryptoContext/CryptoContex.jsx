import React, { useState } from "react";
import { useFetch } from "../CryptoContext/hooks/useFetch";
import { endPoints } from "../services/api";

const CryptoContext = React.createContext();

const coinsPerPage = 50;

const CryptoProvider = ({ children }) => {
  const coins = useFetch(endPoints.coins.getCoins(coinsPerPage));

  //Price Format
  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-EN", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  //Searchbar
  const [search, setSearch] = useState("");
  const onSearchValue = (e) => {
    setSearch(e.target.value);
  };


  return (
    <CryptoContext.Provider
      value={{
        formatPrice,
        search,
        onSearchValue,
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};

export { CryptoContext, CryptoProvider };
