import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Links } from "@/components/Links";
import { Headline } from "@/components/Headline";

const inter = Inter({ subsets: ["latin"] });

type MainProps = {
    title: string;
  };

export default function Main({title}:MainProps) {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <Headline title={title}>{<code className={styles.code}>src/pages/{title}.tsx</code>}</Headline>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>
        <Links />
              </main>
    </>
  );
}
