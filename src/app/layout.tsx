import type { Metadata } from "next";
import { Inter, Unbounded } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const unbounded = Unbounded({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kinky Playback Theatre | Berlin",
  description: "Kinky Improvisation Theatre in Berlin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
