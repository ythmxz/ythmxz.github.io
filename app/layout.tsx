import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ythmxz",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={lexend.className}>
      <body>{children}</body>
    </html>
  );
}
