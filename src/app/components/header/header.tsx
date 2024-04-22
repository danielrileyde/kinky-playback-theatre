import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <Link href="/.">Kinky Playback Theatre</Link>
      </h1>
      <nav className={styles.navbar}>
        <ul className={styles.ul}>
          <li>
            <Link href="/ensemble">Ensemble</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
