import styles from "../styles/Home.module.css";
import React from "react";
import { LazyCard } from "../components/LazyCard/LazyCard";
import { CardList } from "../components/CardList/CardList";
import UUID from "uuidjs";
import { CryptoContext } from "../CryptoContext/CryptoContex";
import { endPoints } from "../services/api";

export default function Home({ coins }) {
  const { formatPrice, search } = React.useContext(CryptoContext);

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
          );
        })}
      </CardList>
    </div>
  );
}

const coinsPerPage = 50;

export async function getStaticProps() {
  try {
    const response = await fetch(endPoints.coins.getCoins(coinsPerPage))
    const data = await response.json()
    return {
      props: { 
        coins: data
       },

       revalidate: 60,
    }
  } catch (error) {
      console.log(error)
  }
}
