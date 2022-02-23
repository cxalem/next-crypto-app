import Image from "next/image";
import cardStyles from "./Card.module.css";
import { CoinRank } from "../CoinRank/CoinRank";
import { Ath } from "../Ath/Ath";
import { CoinSymbol } from "../CoinSymbol/CoinSymbol";
import { CoinTitle } from "../CoinTitle/CoinTitle";
import { High24 } from "../High24/High24";
import { Low24 } from "../Low24/Low24";
import { MarketCap } from "../MarketCap/MarketCap";
import { Price } from "../Price/Price"
import { PriceChange } from "../PriceChange/PriceChange"

const Card = (props) => {
  return (
    <div className={cardStyles.container}>
      <div className={cardStyles.card1Row}>
        <div className={cardStyles.info}>
          <Image
            className={cardStyles.coinImg}
            src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579"
            height={50}
            width={50}
            alt={`${props.coinName}`}
          />
          <div className={cardStyles.coinInfoContainer}>
            <CoinTitle coinName={props.coinName} />
            <div className={cardStyles.coinNameContainer}>
              <CoinSymbol coinSymbol={props.coinSymbol} />
              <CoinRank coinRank={props.rank} />
            </div>
          </div>
        </div>
        <PriceChange priceChange={props.priceChange} />
      </div>

      <div className={cardStyles.card2Row}>
        <High24 high24={props.high24} />
        <Low24 low24={props.low24} />
      </div>

      <div className={cardStyles.card3Row}>
        <div className={cardStyles.coinData}>
          <MarketCap marketCap={props.marketCap} />
          <Ath ath={props.ath} />
        </div>
        <Price price={props.price} />
      </div>
    </div>
  );
};

export { Card };
