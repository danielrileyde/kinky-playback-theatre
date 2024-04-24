import Card from "./Card";
import styles from "./Card.module.css";

interface Member {
  name: string;
  picture: string;
}

interface MemberCardProps {
  member: Member;
}

export default function MemberCard({ member }: MemberCardProps) {
  return (
    <Card>
      <section className={styles.card__image}>{member.picture}</section>
      <p className={styles.card__name}>{member.name}</p>
    </Card>
  );
}
