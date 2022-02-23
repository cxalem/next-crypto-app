import symbolStyles from './CoinSymbol.module.css'

const CoinSymbol = (props) => {
    return (
      <span className={symbolStyles.coinSymbol}>{props.coinSymbol.toUpperCase()}</span>
    )
  }
  
  export { CoinSymbol }