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
      badge={album.rank}
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
                  <img src="%PUBLIC_URL%/spotify-logo.svg" alt="spotify" />
                  <span>Spotify</span>
                </a>
              )
            }
            { 
              album.amgUrl && (
                <a href={album.amgUrl}>
                  <img src="%PUBLIC_URL%/amg-the-bunining-face.jpg" alt="amg" />
                  <span>AMG review</span>
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
