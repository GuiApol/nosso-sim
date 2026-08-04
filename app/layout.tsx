import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Raul & Guilherme",
  description: "06 de janeiro de 2027",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}