import React from "react"
import { keys } from "lodash"
import { Link } from "react-router-dom"

import AlbumCard from "../components/AlbumCard"
import data from "../data.js"

function Year() {
  return (
    <div>
      <h1>{data.year2018.title}</h1>
      <p>(Including the runner-ups)</p>
      {
        data.year2018.items.map(a => (
          <AlbumCard album={a} />
        ))
      }        
    </div>
  )
}

export default Year