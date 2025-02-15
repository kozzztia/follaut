import { Noto_Sans, VT323 } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";
import MainHeader from "@/components/(server)/Header/MainHeader";
import Loader from "@/components/(client)/Loader/Loader";


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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${getNotoSans.variable} ${getVT323.variable}`}>

        <main className={styles.mainLayout}>
          <MainHeader className={styles.mainHeader} />
          <section className={styles.mainSection}>
            <Loader />
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
