import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styles from "./page.module.css";
import Main from "./main/page";

export default function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
