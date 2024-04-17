import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Card from "./components/card/card";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Card name="Daniel Riley-Dittmann" description="Conductor and Actor" />
      <Card />
      <Footer />
    </main>
  );
}
