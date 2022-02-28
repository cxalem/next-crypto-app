import walletBtnStyles from "./ConnectWalletBtn.module.css";
import { LoadingDots } from "../LoadingDots/LoadingDots";
import { ConnectedWallet } from "../ConnectedWallet/ConnectedWallet";
import { CryptoContext } from "../../CryptoContext/CryptoContex";
import React from "react";

const ConnectWalletBtn = () => {
  const { handleConnect, loading } = React.useContext(CryptoContext);

  return (
    <>
      { 
        <button className={walletBtnStyles.walletBtn} onClick={handleConnect}>
          {loading ? <LoadingDots /> : <span className={walletBtnStyles.span}>Connect wallet</span>}
        </button>
      }
    </>
  );
};

export { ConnectWalletBtn };
