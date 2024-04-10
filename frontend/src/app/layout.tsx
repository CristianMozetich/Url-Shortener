import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/footer/Footer";
import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Simple URL",
  description: "Acortador de Url´s",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
