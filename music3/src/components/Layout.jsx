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
            <ul className={
              isExpanded === false
                ? styles.navmenu
                : styles.navmenu + " " + styles.active
            }>
                <li>create</li>
                <li></li>
            </ul>
        </nav>
      </header>

      { children }
      
      {/* footer */}

      <footer className={styles.footer}>
        Kusahgra
      </footer>
    </>
  );
}
