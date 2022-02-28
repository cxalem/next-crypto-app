import { useBalance } from "wagmi";
import { CryptoContext } from "../../CryptoContext/CryptoContex";
import React from "react";
import dashboardStyles from "./Dashboard.module.css";
import { useFetch } from "../../CryptoContext/hooks/useFetch";
import { endPoints } from "../../services/api";
import { BalanceSkeleton } from "../BalanceSkeleton/BalanceSkeleton";

const coinsPerPage = 2;

const Dashboard = () => {
  const { accountData, formatPrice } = React.useContext(CryptoContext);
  const [{ data, error, loading }, getBalance] = useBalance({
    addressOrName: `${accountData.address}`,
  });

  const coins = useFetch(endPoints.coins.getCoins(coinsPerPage));
  const usdBalance = coins[1]?.current_price * Number(data?.formatted);

  if (loading) return <BalanceSkeleton />;
  if (error) return <div>Error fetching balance</div>;

  return (
    <>
      <h2 className={dashboardStyles.cardTitle}>Your balance</h2>
      <div className={dashboardStyles.balanceContainer}>
        <div className={dashboardStyles.balanceInfo}>
          <span className={dashboardStyles.cryptoBalance}>
            {Number(data?.formatted).toFixed(5)}{" "}
          </span>
          <span className={dashboardStyles.cryptoSymbol}>{data?.symbol}</span>
        </div>
        <span className={dashboardStyles.usdBalance}>
          {formatPrice(usdBalance.toFixed(3))}
        </span>
      </div>
    </>
  );
};

export { Dashboard };
