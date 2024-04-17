import styles from "./card.module.css";

interface CardProps {
  name: string;
  description: string;
}

export default function Card({ name, description }: CardProps) {
  return (
    <main className={styles.main}>
      {/* <Image /> */}
      <h2 className="card__name">{name}</h2>
      <p className="card__description">{description}</p>
    </main>
  );
}
