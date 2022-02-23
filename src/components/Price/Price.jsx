import priceStyles from "./Price.module.css"

const Price = (props) => {
    return (
      <h2 className={priceStyles.price}>{props.price}</h2>
    )
  }
  
  export { Price }