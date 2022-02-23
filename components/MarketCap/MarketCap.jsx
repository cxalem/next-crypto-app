import marketCapStyles from "./MarketCap.module.css";

const MarketCap = (props) => {
  return (
    <p className={marketCapStyles.marketInfo}>
      Market Cap:{" "}
      <span className={marketCapStyles.marketPrice}>999999{props.marketCap}</span>
    </p>
  );
};

export { MarketCap };
