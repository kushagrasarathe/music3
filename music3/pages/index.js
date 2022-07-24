import Head from "next/head";
import Image from "next/image";
import landing from "../src/assets/music3.png";
import styles from "../styles/Home.module.css";
// import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Music3</title>
        <meta name="description" content="Music Upload to IPFS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}></main>
      <main className={styles.main}>
        <h1 className={styles.logo}>music3</h1>
        <div className={styles.hero_img}>
          <Image src={landing} />
        </div>
        <h3 className={styles.heading}>
          Upload and share music over Decentralized Internet
        </h3>
        <div className={styles.soundIcon}>
          <div className={styles.soundWave}>
            <i className={styles.bar}></i>
            <i className={styles.bar}></i>
            <i className={styles.bar}></i>
            <i className={styles.bar}></i>
            <i className={styles.bar}></i>
            <i className={styles.bar}></i>
            <i className={styles.bar}></i>
            <i className={styles.bar}></i>
            <i className={styles.bar}></i>
            <i className={styles.bar}></i>
            <i className={styles.bar}></i>
            <i className={styles.bar}></i>
            <i className={styles.bar}></i>
            <i className={styles.bar}></i>
            <i className={styles.bar}></i>
            <i className={styles.bar}></i>
            <i className={styles.bar}></i>
            <i className={styles.bar}></i>
            <i className={styles.bar}></i>
            <i className={styles.bar}></i>
          </div>
        </div>
        <button className={styles.button}>Upload Now</button>
      </main>
      <div className={styles.features}>
        <h2 className={styles.heading}>Key Features</h2>
        <ul className={styles.feature}>
          <li>Store music on IPFS in 1 Click</li>
          <li>Get music cover as NFT dropped in your wallet</li>
          <li>Download songs from song library</li>
          <li>All of this on Polygon Main Chain</li>
        </ul>
            <button className={styles.button}>Music Library</button>
      </div>
    </div>
  );
}
