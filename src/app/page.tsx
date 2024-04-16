import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import MemberCard from "./components/member card/memberCard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <MemberCard />
      <Footer />
    </main>
  );
}
