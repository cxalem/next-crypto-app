import symbolStyles from './CoinSymbol.module.css'

const CoinSymbol = (props) => {
    return (
      <span className={symbolStyles.coinSymbol}>BTC</span>
    )
  }
  
  export { CoinSymbol }