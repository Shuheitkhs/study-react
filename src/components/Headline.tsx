import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

type HeadlineProps = {
    title: string;
    children? : ReactNode
  };

export function Headline( {title , children }: HeadlineProps  ) {
  return (
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp; {children}
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
          <h1>{title}</h1>
          
        </div>

  );
}
