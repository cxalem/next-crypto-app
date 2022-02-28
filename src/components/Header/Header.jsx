import headerStyles from "./Header.module.css";
import { DevamSvg } from "../../SvgComponents/DevamLogo/DevamLogo";
import { ConnectWalletBtn } from "../ConnectWalletBtn/ConnectWalletBtn";
import { SearchBar } from "../SearchBar/SearchBar";
import { ConnectedWallet } from "../ConnectedWallet/ConnectedWallet";
import { CryptoContext } from "../../CryptoContext/CryptoContex";
import React from "react";

const Header = () => {
  // const date = new Date();
  // const todaysDate = date.toDateString();

  const { accountData } = React.useContext(CryptoContext);

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.headerInfo}>
        {/* <span className={headerStyles.date}>{todaysDate}</span> */}
        <DevamSvg className={headerStyles.devamSvg} fill="#EDF8F8" />
        {accountData ? <ConnectedWallet /> : <ConnectWalletBtn />}
      </div>
      <SearchBar />
    </header>
  );
};

export { Header };
