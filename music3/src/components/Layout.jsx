import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
// import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Layout({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleClick() {
    setIsExpanded(!isExpanded);
  }

  return (
    <>
      <header>
        <nav className={styles.navbar}>
          <span className={styles.logo}>
            <Link href={"/"}>music3</Link>
          </span>
          <ul
            className={
              isExpanded === false
                ? styles.navmenu
                : styles.navmenu + " " + styles.active
            }
          >
            <li className={styles.navitem}>
              <Link href="/">
                <a className={styles.navlink}>Home</a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/create">
                <a className={styles.navlink}>Create</a>
              </Link>
            </li>
            {/* 
            <ConnectButton /> */}
          </ul>
        </nav>
      </header>

      {children}

      {/* footer */}

      <footer className={styles.footer}>Kusahgra</footer>
    </>
  );
}
