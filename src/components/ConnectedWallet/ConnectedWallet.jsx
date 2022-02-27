import { CryptoContext } from "../../CryptoContext/CryptoContex";
import React from "react";
import connectedStyles from "./ConnectedWallet.module.css"
import { WalletSvg } from "../../SvgComponents/WalletSvg/WalletSvg"
import { ExitSvg } from "../../SvgComponents/ExitSvg/ExitSvg"

const ConnectedWallet = () => {
  const { accountData, disconnect, truncateString } = React.useContext(CryptoContext);

  return (
    <div className={connectedStyles.connectedInfo}>
      {
        accountData.ens?.avatar ? <img src={accountData.ens?.avatar} alt="ENS Avatar" /> :
        <div className={connectedStyles.imgContainer}>
          <WalletSvg className={connectedStyles.walletImg} />
        </div>
      }
      <div className={connectedStyles.addrData}>
        {
        accountData.ens?.name ? <span>`${accountData.ens?.name} (${truncateString(accountData.address)})`</span> : 
        <span>{truncateString(accountData.address)}</span>
        }
        <button onClick={disconnect}> <ExitSvg /> </button>
      </div>
    </div>
  );
};

export { ConnectedWallet };
