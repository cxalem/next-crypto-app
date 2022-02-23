import price24Styles from "./Low24.module.css"

const Low24 = (props) => {
    return (
      <p className={price24Styles.low24}>
        Low 24h: <span className={price24Styles.price24H}>{props.low24}</span>
      </p>
    )
  }
  
  export { Low24 }