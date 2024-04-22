import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styles from "./page.module.css";
import About from "./about/page";

export default function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <About />
      <Footer />
    </div>
  );
}
