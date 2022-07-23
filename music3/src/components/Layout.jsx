import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleClick() {
    setIsExpanded(!isExpanded);
  }

  return (
    <>
      <header>
        <nav className={styles.navbar}>
            <span><Link href={"/"} >music3</Link></span>
        </nav>
      </header>

      { children }
      {/* footer */}

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );
}
