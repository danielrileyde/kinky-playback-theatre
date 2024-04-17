import styles from "./card.module.css";

export default function Card() {
  return (
    <main className={styles.main}>
      {/* <Image /> */}
      <h2 className="card__name">Daniel Riley-Dittmann</h2>
      <p className="card__description">Conductor and Actor</p>
    </main>
  );
}
