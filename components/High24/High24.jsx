import highStyles from "./High24.module.css"

const High24 = (props) => {
    return (
      <p className={highStyles.high24}>
            High 24h: <span className={highStyles.price24H}>{props.high24}</span>
      </p>
    )
  }
  
  export { High24 }