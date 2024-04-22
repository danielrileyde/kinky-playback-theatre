import styles from "./ensemble.module.css";
import MemberCard from "../components/Card/MemberCard";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const members = [
  { name: "Daniel Riley-Dittmann", picture: "Hello" },
  { name: "Tanguy Lacroix", picture: "is it working?" },
  { name: "Maya Blau", picture: "I Hope so..." },
  { name: "Solenne La", picture: "and?" },
  { name: "Neal Bruewer", picture: "IT WORKS!!!" },
  { name: "Petros Xenios", picture: "IT WORKS!!!" },
  { name: "Evelin Espenberg", picture: "IT WORKS!!!" },
  { name: "Ana Ornelas", picture: "IT WORKS!!!" },
];

export default function Ensemble() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles["card-container"]}>
        {members.map((member, index) => (
          <MemberCard key={index} member={member} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
