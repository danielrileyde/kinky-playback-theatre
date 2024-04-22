import type { Metadata } from "next";
import { Inter, Unbounded } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
});

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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <div className={`${inter.className} ${unbounded.className}`}>
          {children}
        </div>
      </body>
    </html>
  );
}
