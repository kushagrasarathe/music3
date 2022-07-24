import Head from "next/head";
import Image from "next/image";
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
    </div>
  );
}
