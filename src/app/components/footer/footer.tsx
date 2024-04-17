import styles from "./footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p className={styles.p}>Made with 🖤 in Berlin</p>
      <p className={styles.p}>{currentYear}</p>
    </footer>
  );
}
