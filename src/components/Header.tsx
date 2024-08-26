import Link from "next/link";
import styles from "@/styles/Header.module.css";

export function Header() {
  return (
        <div className={styles.header}>
        <Link href="/" className={styles.anchor}>Index</Link>
         
         <Link href="/about" className={styles.anchor}>About</Link>
        </div>
  );
}


