import Head from "next/head";
import Image from "next/image";
import landing from "../src/assets/music3.png";
import nftstorage from "../src/assets/nftstorage.svg";
import web3storage from "../src/assets/web3storage.svg";
import polygon from "../src/assets/polygon.svg";
import nftport from "../src/assets/nftport.svg";
import ipfs from "../src/assets/ipfs.png";
import spheron from "../src/assets/spheron.svg";
import valist from "../src/assets/valist.png";
import styles from "../styles/Home.module.css";
import Link from "next/link";
// import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Music3</title>
        <meta name="description" content="Music Upload to IPFS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
            <i className={styles.wavebar}></i>
            <i className={styles.wavebar}></i>
            <i className={styles.wavebar}></i>
            <i className={styles.wavebar}></i>
            <i className={styles.wavebar}></i>
            <i className={styles.wavebar}></i>
            <i className={styles.wavebar}></i>
            <i className={styles.wavebar}></i>
            <i className={styles.wavebar}></i>
            <i className={styles.wavebar}></i>
            <i className={styles.wavebar}></i>
            <i className={styles.wavebar}></i>
            <i className={styles.wavebar}></i>
            <i className={styles.wavebar}></i>
            <i className={styles.wavebar}></i>
            <i className={styles.wavebar}></i>
            <i className={styles.wavebar}></i>
            <i className={styles.wavebar}></i>
            <i className={styles.wavebar}></i>
            <i className={styles.wavebar}></i>
          </div>
        </div>
        <Link href={'/create'}>

          <button className={styles.button}>Upload Now</button>
      </Link>
      </main>
      <div className={styles.features}>
        <h2 className={styles.heading}>Key Features</h2>
        <ul className={styles.feature}>
          <li>Store music on IPFS in single Click</li>
          <li>Get music cover as NFT dropped in your wallet</li>
          <li>Download songs from song library</li>
          <li>All of this on Polygon Main Chain</li>
        </ul>
        <Link href={'/library'}>
          <button className={styles.button}>Music Library</button>
        </Link>
      </div>

      <div className={styles.sponsors}>
        <h2 className={styles.heading}>Powered By</h2>

        <div className={styles.sponsor_images}>
          <div className={styles.sponsor}>
            <Image src={polygon} />
          </div>
          <div className={`${styles.sponsor} ${styles.ipfs}`}>
            <Image src={ipfs} />
          </div>
          <div className={styles.sponsor}>
            <Image src={nftstorage} />
          </div>
          <div className={styles.sponsor}>
            <Image src={web3storage} />
            Web3.Storage
          </div>
          <div className={styles.sponsor}>
            <Image src={nftport} />
          </div>
          <div className={styles.sponsor}>
            <Image src={spheron } />
          </div>
          <div className={`${styles.sponsor} ${styles.valist}`}>
            <Image src={valist } />
          </div>
        </div>
      </div>
    </div>
  );
}
