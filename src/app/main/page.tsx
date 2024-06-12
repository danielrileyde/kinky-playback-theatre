import styles from "./Main.module.css";
import Image from "next/image";
import profilePic from "./profilePic.jpg";

export default function Main() {
  return (
    <section className={styles.section}>
      <h1>Welcome!</h1>
      <p>We are the Kinky Playback Ensemble from Berlin!</p>
      <Image src={profilePic} alt="Picture of the Group" />
    </section>
  );
}
