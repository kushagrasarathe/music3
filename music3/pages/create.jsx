import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function create() {
  const [bannerUrl, updateBannerUrl] = useState(``);
  const [musicUrl, updateMusicUrl] = useState(``);
  const [description, setDescription] = useState("");

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.heading}>Upload Music</h1>
          <div className={styles.upload_section}>
            <h3>Please fill all details</h3>
            <hr />
            <p>Banner</p>
            <input
              type="file"
              // onChange={onChange}
            />
            {bannerUrl && <img src={bannerUrl} width="600px" />}
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
              // onChange={onChange}
            />
            {musicUrl && <img src={musicUrl} width="600px" />}
            <div>
                <hr />
              <button className={styles.button}>Upload Song</button>
            </div>
          </div>
          form banner description upload mint
        </main>
      </div>
    </>
  );
}
