import React from 'react'
import Song from '../src/components/Song'
import styles from '../styles/Home.module.css'

export default function 
() {
  return (
    <div className={styles.song_section}>
        <h1 className={styles.heading}>Song Library</h1>
        <div className={styles.songs}>
            <div>

            <Song
                song="https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3" />
            </div>
            <div>
            <Song />
            </div>
        </div>
    </div>
  )
}
