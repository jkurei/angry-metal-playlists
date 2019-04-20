import React from "react"
import { keys } from "lodash"
import { Link } from "react-router-dom"
import ReactMarkdown from "react-markdown"

import Sidebar from "../components/Sidebar"
import data from "../data.js"
import Media from "react-media";

function Home() {
  // couldnt get react-media to work so im doing this hack for now
  const width = window.innerWidth
  const bigScreen = width >= 600
      
  return (
    <div>
      <ReactMarkdown source={`
I've been reading [Angry Metal Guy](https://www.angrymetalguy.com/)'s
reviews for years, and they've since been the first place
I go whenever I need new metal or don't know what to listen to.

This site is just a quick and easy way to peck around 
AMG's favourite albums and tracks.

This site is made as a small React app, because I'm using part of its 
code for a larger project. It's also free software, published on
[GitHub](github.com). The code is not very interesting right now, 
but it might get better some day.
      `} />
      {
        !bigScreen && (
          <>
          <h2>Sections: </h2>
          <Sidebar />
          </>
        )
      }
      {
        /*
        <Media query="{ max-width: 599 }" render={() => (
          <Sidebar />
        )} />
        */
      }
      <h2>Attributions</h2>
      <p>
        Of course, if this playlists are any good 
        is all due to the Angry Metal Guy staff's
        knowledge and good taste.
      </p>
      <p>
        <a href="https://www.flaticon.com/free-icon/spotify-logo_7709">
          Spotify icon
        </a> 
        {" made by "}
        <a href="https://www.elegantthemes.com/">
          Elegant Themes
        </a>
      </p>
    </div>
  )
}

export default Home