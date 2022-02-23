import React from "react";
import { LupaSvg } from "../../SvgComponents/Lupa/Lupa";
import searchBarStyles from "./SearchBar.module.css";
import { CryptoContext } from "../../CryptoContext/CryptoContex";

const SearchBar = () => {
  const { search, onSearchValue } = React.useContext(CryptoContext);
  return (
    <div className={searchBarStyles.searchContainer}>
      <input
        onChange={onSearchValue}
        value={search}
        className={searchBarStyles.searchInput}
        placeholder="Find your crypto..."
      ></input>
      <button className={searchBarStyles.searchBtn}>
        <LupaSvg className={searchBarStyles.lupaSvg} stroke="#EDF8F8" />
      </button>
    </div>
  );
};

export { SearchBar };
