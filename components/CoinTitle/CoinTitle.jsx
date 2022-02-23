import titleStyles from "./CoinTitle.module.css"

const CoinTitle = (props) => {
    return (
      <h3 className={titleStyles.cardTitle}>Bitcoin{props.coinName}</h3>
    )
  }
  
  export { CoinTitle }