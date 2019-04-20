import React from "react"

import Card from "../components/Card"
import "./AlbumCard.scss"

function AlbumCard({ 
  album, 
  big = false 
}) {
  return (
    <Card 
      className="AlbumCard"
      imgSrc={album.thumbnailUrl}
      width={big ? 160 : 145}
      text={
        <React.Fragment>
          <header>
            <h1>{album.album}</h1>
            <p>{album.artist}</p>
          </header>
          <div className="links">
            { 
              album.spotifyUrl && (
                <a href={album.spotifyUrl}>
                  <img src="/spotify-logo.svg" alt="spotify" />
                  <span>Spotify</span>
                </a>
              )
            }
          </div>
        </React.Fragment>
      }
    />
  )
}

AlbumCard.defaultProps = {
  width: 80,
}

export default AlbumCard
