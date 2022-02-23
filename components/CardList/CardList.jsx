import cardListStyles from "./CardList.module.css";

const CardList = (props) => {
  return (
    <section className={cardListStyles.cardList}>
        {props.children}
    </section>
  );
};

export { CardList };
