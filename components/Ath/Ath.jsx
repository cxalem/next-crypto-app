import athStyles from './Ath.module.css'

const Ath = (props) => {
  return (
    <p className={athStyles.marketInfo}>
      All Time High: <span className={athStyles.marketPrice}>{props.ath}</span>
    </p>
  );
};

export { Ath };
