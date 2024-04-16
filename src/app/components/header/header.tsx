import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <h2 className="logoName">Kinky Playback Theatre</h2>
      <nav className="navbar">
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
