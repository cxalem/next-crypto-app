import priceStyles from "./PriceChange.module.css";

const PriceChange = (props) => {
  return (
    <>
      {props.priceChange > 0 ? (
        <span className={priceStyles.priceChange}>
          ▲{props.priceChange.toFixed(3)}
        </span>
      ) : (
        <span className={priceStyles.downPrice}>
          ▼{props.priceChange.toFixed(3).split('-')}
        </span>
      )}
    </>
  );
};

export { PriceChange };
