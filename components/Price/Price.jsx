import priceStyles from "./Price.module.css"

const Price = (props) => {
    return (
      <h2 className={priceStyles.price}>46,500.00{props.price}</h2>
    )
  }
  
  export { Price }