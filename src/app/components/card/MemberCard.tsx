import Card from "./Card";

interface Member {
  name: string;
  picture: string;
}

interface MemberCardProps {
  member: Member;
}

export default function MemberCard({ member }: MemberCardProps) {
  return (
    <Card className="name">
      <p>{member.picture}</p>
      <p>{member.name}</p>
    </Card>
  );
}
