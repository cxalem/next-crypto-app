import styles from "../styles/Home.module.css";
import React from "react";
import { LazyCard } from "../components/LazyCard/LazyCard";
import { CardList } from "../components/CardList/CardList";
import UUID from "uuidjs";
import { CryptoContext } from "../CryptoContext/CryptoContex";

export default function Home() {
  const { formatPrice, searchedCoins } =
  React.useContext(CryptoContext);

  return (
    <div className={styles.container}>
      <CardList>
        {searchedCoins?.map((coin) => {
          return (
            <LazyCard 
            key={UUID.generate()}
            coinName={coin.name}
            coinSymbol={coin.symbol}
            marketCap={formatPrice(coin.market_cap)}
            price={formatPrice(coin.current_price)}
            high24={formatPrice(coin.high_24h)}
            low24={formatPrice(coin.low_24h)}
            ath={formatPrice(coin.ath)}
            rank={coin.market_cap_rank}
            priceChange={coin.price_change_percentage_24h}
            coinImg={coin.image}
            />
          )
        })}
      </CardList>
    </div>
  );
}
