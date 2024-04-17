import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Card from "./components/card/card";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.section}>
        <Card name="Maya Blau" description="Founder and Actress" />
        <Card name="Daniel Riley-Dittmann" description="Conductor and Actor" />
        <Card name="Tanguy Lacroix" description="Musician and Actor" />
        <Card name="Solenne La" description="Actress" />
      </section>
      <Footer />
    </main>
  );
}
