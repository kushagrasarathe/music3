import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Layout({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [address, setAddress] = useState("");
  function handleClick() {
    setIsExpanded(!isExpanded);
  }

  async function connect() {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log({ accounts });
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
<<<<<<< HEAD
=======
            <li className={styles.navitem}>
              <Link href="/library">
                <a className={styles.navlink}>Library</a>
              </Link>
            </li>

            {/* <ConnectButton /> */}
>>>>>>> 1a7ba2d9a9c10289c3f09fb964ae610246cc2c80
          </ul>
          <button className={styles.connect}>Connect</button>
          {/* <ConnectButton /> */}

          <button
            onClick={handleClick}
            className={
              isExpanded === false
                ? styles.hamburger
                : styles.hamburger + " " + styles.active
            }
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </nav>
      </header>

      {children}

      {/* footer */}
      {/* <footer className="footer">Kusahgra</footer> */}
    </>
  );
}
