import React from 'react'
import sample from '../assets/sample.jpg'
import sample_music from '../assets/sample.mp3'
import Image from 'next/dist/client/image'
import styles from '../../styles/Home.module.css'
import ReactAudioPlayer from 'react-audio-player';

export default function Song() {
  return (
    <div className={styles.song_card}>
      <h2>Name</h2>
      <div>
        <Image width={"150px"} height={"150px"} src={sample} />
      </div>
      <ReactAudioPlayer
        src={sample_music}
        autoPlay
        controls
      />
      {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta dolorem consequatur porro architecto assumenda quisquam incidunt.</p> */}
    </div>
  )
}
