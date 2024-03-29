import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { StoreContent } from "../src/components/StoreContent";
import { StoreMetadata } from "../src/components/StoreMetadata";
import { MintNFT2 } from "../src/components/MintNFT2";
import { MintNFT3 } from "../src/components/MintNFT3";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Create() {
  const [minted, setMinted] = useState(false);
  // const [bannerUrl, updateBannerUrl] = useState(``);
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  /// can be shared with friends to show the NFT
  const [musicCID, setMusicCID] = useState("");
  const [name, setName] = useState("");
  const [banner, setBanner] = useState([]);
  const [audio, setAudio] = useState([]);
  const [description, setDescription] = useState("");
  const [metadata, setMetadata] = useState("");
  const [txURL, setTxURL] = useState("");

  const notify = (message) => toast(`${message}`);

  async function connect() {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log({ accounts });
    setAddress(accounts[0]);
    notify("Wallet connected");
    console.log(address);
  }

  /// uploads the audio to the Web3.storage
  // approved
  const uploadAudio = async () => {
    try {
      const cid = await StoreContent(audio);
      const audioCID = `https://w3s.link/ipfs/${cid}`;
      console.log(audioCID);
      notify("Music file uploaded to IPFS");
      setMusicCID(audioCID);
      await uploadMetadata(banner, name, audioCID, description);
    } catch (err) {
      console.log(err);
      notify(err);
    }
  };

  /// uploads the Metadata for the NFT to NFT.
  // approved
  const uploadMetadata = async (Banner, Name, MusicCID, Description) => {
    try {
      const metadata = await StoreMetadata(Banner, Name, MusicCID, Description);
      const uri = metadata.url;
      setMetadata(uri);
      notify("NFT metadata uploaded to IPFS");
      await mintNFT(uri, address);
    } catch (err) {
      console.log(err);
    }
  };

  /// mints the NFT by calling the function
  const mintNFT = async (metadataURI, userAddress) => {
    try {
      // await connect();
      const response = await MintNFT3(metadataURI, userAddress);
      console.log("NFT minted with transaction : ", response.transaction_hash);
      console.log(
        "Track the transaction here : ",
        response.transaction_external_url
      );
      // await console.log("Track Your Transaction here : ")
      setTxURL(response.transaction_external_url);
      notify("NFT minted ");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await uploadAudio();
      // await setTimeout(uploadMetadata(), 5000);
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
          {!minted ? (
            <>
              <h1 className={styles.heading}>Upload Music</h1>
              <div className={styles.upload_section}>
                <h3>Please fill all details</h3>
                <hr />
                <p>Name of Song</p>
                <input
                  type="text"
                  placeholder="Closer"
                  value={name}
                  className={styles.song_name}
                  onChange={(e) => setName(e.target.value)}
                />
                <p>Banner Cover</p>
                <input
                  type="file"
                  onChange={(e) => setBanner(e.target.files[0])}
                />
                {banner && <img src={banner} width="600px" />}
                <p>Description for Song</p>
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
                  onChange={(e) => setAudio(e.target.files[0])}
                />
                {audio && <audio src={audio} width="600px" muted />}

                <div>
                  {!address ? (
                    <>
                      <button className={styles.button} onClick={connect}>
                        Connect
                      </button>
                      <a>Or</a>
                      <input
                        type="text"
                        placeholder="Enter the wallet Address"
                        value={address}
                        className={styles.song_name}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </>
                  ) : (
                    <a className={styles.connectButtontext}>
                      {" "}
                      Address : {address.slice(0, 6)}....{address.slice(38)}{" "}
                    </a>
                  )}
                  <hr />
                  <button className={styles.button} onClick={handleSubmit}>
                    Upload Song
                  </button>
                  {/* <div> */}
                  {/* <button onClick={notify}>Notify!</button> */}
                  <ToastContainer />
                  {/* </div> */}
                </div>
              </div>
            </>
          ) : (
            <p>Audio uploaded and </p>
          )}
        </main>
      </div>
    </>
  );
}
