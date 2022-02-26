import cardListStyles from "./CardList.module.css";

const CardList = (props) => {
  return (
    <>
      <h1 className={cardListStyles.cardListTitle}>
        Today&apos;s Cryptocurrency Prices by Market Cap
      </h1>
      <section className={cardListStyles.cardList}>{props.children}</section>
    </>
  );
};

export { CardList };
