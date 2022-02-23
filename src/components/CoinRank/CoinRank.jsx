import rankStyles from "./CoinRank.module.css";

const CoinRank = (props) => {
  return <span className={rankStyles.rank}>Rank# {props.coinRank}</span>;
};

export { CoinRank };
