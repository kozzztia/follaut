import type { Metadata } from "next";
import { Noto_Sans, VT323 } from "next/font/google";
import Header from "@/templates/header/Header";
import "./globals.css";
import styles from "./layout.module.css";
import Footer from "@/templates/footer/Footer";


const getNotoSans = Noto_Sans({
  variable: "--font-noto-sans",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const getVT323 = VT323({
  variable: "--font-vt323",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Next App",
  description: "description about next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${getNotoSans.variable} ${getVT323.variable}`}>
        <main className={styles.mainLayout}>
          <Header className={styles.layoutHeader} />
          <section className={styles.layoutContent}>
            {children}
          </section>
          <Footer className={styles.layoutFooter} />
        </main>
      </body>
    </html>
  );
}
