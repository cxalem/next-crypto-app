import marketCapStyles from "./MarketCap.module.css";

const MarketCap = (props) => {
  return (
    <p className={marketCapStyles.marketInfo}>
      Market Cap:{" "}
      <span className={marketCapStyles.marketPrice}>{props.marketCap}</span>
    </p>
  );
};

export { MarketCap };
