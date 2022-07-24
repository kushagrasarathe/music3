import React from "react";
import sample from "../assets/sample.jpg";
// import sample_music from '../assets/sample.mp3'
import Image from "next/dist/client/image";
import styles from "../../styles/Home.module.css";
// import AudioPlayer from "react-h5-audio-player";
// import "react-h5-audio-player/lib/styles.css";
// import song from "../assets/sample.mp3";

const tracks = [
  {
    url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
    title: "Madza - Chords of Life",
    tags: ["house"],
  },
  {
    url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
    title: "Madza - Late Night Drive",
    tags: ["dnb"],
  },
  {
    url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
    title: "Madza - Persistence",
    tags: ["dubstep"],
  },
];

export default function Song({ song }) {
  return (
    <div className={styles.song_card}>
      <h2>{song.metadata.name}</h2>
      <div>
        <Image width={"150px"} height={"150px"} src={song.cached_file_url} />
      </div>

      <AudioPlayer
        autoPlay
        src={song.metadata.external_url}
        onPlay={(e) => console.log("onPlay")}
        // other props here
      />
      <p>{song.metadata.description}</p>
    </div>
  );
}
