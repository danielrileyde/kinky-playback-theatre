// import styles from "./Card.module.css";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export default function Card({ className, children }: CardProps) {
  return <div className={`card ${className}`}>{children}</div>;
}
