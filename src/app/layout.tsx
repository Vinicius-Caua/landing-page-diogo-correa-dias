import { Mynerve } from "next/font/google";
import type { Viewport } from "next";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";
import "./globals.css";

const mynerve = Mynerve({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Diogo Correa Dias - Escritor",
  description:
    "Landing page oficial de Diogo Correa Dias, escritor de ficção científica e fantasia. Venha me conhecer!",
  author: "Diogo Correa Dias",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Diogo Correa Dias – Escritor",
    description:
      "Landing page oficial de Diogo Correa Dias, escritor de ficção científica e fantasia. Venha me conhecer!",
    type: "website",
    siteName: "Diogo Correa Dias",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={mynerve.className}>
      <body>
        <HeaderComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
