import React from 'react'
import sample from '../assets/sample.jpg'
// import sample_music from '../assets/sample.mp3'
import Image from 'next/dist/client/image'
import styles from '../../styles/Home.module.css'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
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

export default function Song( props ) {
  return (
    <div className={styles.song_card}>
      <h2>Name</h2>
      <div>
        <Image width={"150px"} height={"150px"} src={sample} />
      </div>

        <AudioPlayer
        autoPlay
        src="https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3"
        onPlay={e => console.log("onPlay")}
        // other props here
        />
      {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta dolorem consequatur porro architecto assumenda quisquam incidunt.</p> */}
    </div>
  )
}
