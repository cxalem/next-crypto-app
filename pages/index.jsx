import styles from "../styles/Home.module.css";
import { LazyCard } from "../components/LazyCard/LazyCard";
import { CardList } from "../components/CardList/CardList";

export default function Home() {
  return (
    <div className={styles.container}>
      <CardList>
        <LazyCard />
      </CardList>
    </div>
  );
}
