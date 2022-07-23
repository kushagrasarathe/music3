import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { StoreContent } from "../src/components/StoreContent";
import { StoreMetadata } from "../src/components/StoreMetadata";
import { MintNFT2 } from "../src/components/MintNFT2";
import { useAccount } from "wagmi";
export default function create() {
  const [minted, SetMinted] = useState(false);
  // const [bannerUrl, updateBannerUrl] = useState(``);
  const [loading, setLoading] = useState(false);
  const [name, SetName] = useState("");
  const [banner, SetBanner] = useState([]);
  const [audio, SetAudio] = useState([]);
  const [audioCID, SetAudioCID] = useState("");
  const [description, setDescription] = useState("");
  const [metadata, setMetadata] = useState("");
  const [txURL, setTxURL] = useState("");

  /// fetching address from useAccount
  const { address } = useAccount();

  /// uploads the audio to the Web3.storage
  // approved
  const uploadAudio = async () => {
    try {
      const cid = await StoreContent(audio);
      const url = `https://ipfs.io/ipfs/${cid}`;
      console.log(url);
      SetAudioCID(`ipfs://${cid}`);
      return true;
    } catch (err) {
      console.log(err);
    }
  };

  /// uploads the Metadata for the NFT to NFT.storage
  const uploadMetadata = async () => {
    try {
      const url = await StoreMetadata(banner, name, audioCID, description);
      console.log(url);
      setMetadata(url);
    } catch (err) {
      console.log(err);
    }
  };

  /// mints the NFT by calling the function
  const mintNFT = async () => {
    try {
      const response = await MintNFT2(metadata, address);
      console.log("NFT minted with transaction : ", response.transaction_hash);
      console.log(
        "Track the transaction here : ",
        response.transaction_external_url
      );
      if (response.response == "OK ") {
        SetMinted(true);
        setTxURL(response.transaction_external_url);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      // await uploadAudio();
      await uploadMetadata();
      // await mintNFT();
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.heading}>Upload Music</h1>
          <div className={styles.upload_section}>
            <h3>Please fill all details</h3>
            <hr />
            <p>Name</p>
            <input
              type="text"
              placeholder="Closer"
              value={name}
              className={styles.song_name}
              onChange={(e) => SetName(e.target.value)}
            />
            <p>Banner</p>
            <input type="file" onChange={(e) => SetBanner(e.target.files[0])} />
            {banner && <img src={banner} width="600px" />}
            <p>Description</p>
            <textarea
              placeholder="happy song"
              className={styles.song_description}
              value={description}
              cols="100"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <p>Music File</p>
            <input
              type="file"
              accept=".mp3,audio/*"
              onChange={(e) => SetAudio(e.target.files[0])}
            />
            {audio && <audio src={audio} width="600px" muted />}
            <div>
              <hr />
              <button className={styles.button} onClick={handleSubmit}>
                Upload Song
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
