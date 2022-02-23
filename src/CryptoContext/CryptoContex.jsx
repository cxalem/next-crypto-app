import React, { useState } from "react";
import { useFetch } from "../CryptoContext/hooks/useFetch";
import { endPoints } from "../services/api";

const CryptoContext = React.createContext();

const coinsPerPage = 50;

const CryptoProvider = ({ children }) => {
  const coins = useFetch(endPoints.coins.getCoins(coinsPerPage));
  console.log(coins);

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
  let searchedCoins = [];
  if (!search.length >= 1) {
    searchedCoins = coins;
  } else {
    searchedCoins = coins.filter((coin) => {
      const coinName = coin.name.toLowerCase();
      const searchText = search.toLowerCase();
      return coinName.includes(searchText);
    });
  }

  return (
    <CryptoContext.Provider
      value={{
        formatPrice,
        search,
        onSearchValue,
        searchedCoins,
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};

export { CryptoContext, CryptoProvider };
