import React from "react";
import Song from "../src/components/Song";
import styles from "../styles/Home.module.css";
import { ListNFT } from "../src/components/ListNFT";
import { useState, useEffect } from "react";
export default function () {
  const [songs, setSongs] = useState([]);
  const fetchNFTs = async () => {
    try {
      console.log("Fetching minted NFTs...");
      const data = await ListNFT();
      console.log(data);
      setSongs(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchNFTs();
  }, []);

  return (
    <div className={styles.song_section}>
      <h1 className={styles.heading}>Song Library</h1>
      <div className={styles.songs}>
        <div>
          {songs ? (
            songs.map((song, index) => <Song song={song} />)
          ) : (
            <a>No Songs Found </a>
          )}
        </div>
        <div>
          <Song />
        </div>
      </div>
    </div>
  );
}
