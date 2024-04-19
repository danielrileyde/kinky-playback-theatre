import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import styles from "./page.module.css";
import MemberCard from "./components/Card/MemberCard";

const members = [
  { name: "Daniel Riley-Dittmann", picture: "Hello" },
  { name: "Tanguy Lacroix", picture: "is it working?" },
  { name: "Maya Blau", picture: "I Hope so..." },
  { name: "Sol Lane", picture: "and?" },
];

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        {members.map((member, index) => (
          <MemberCard key={index} member={member} />
        ))}
      </main>
      <Footer />
    </div>
  );
}
