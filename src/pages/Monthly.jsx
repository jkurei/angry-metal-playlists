import React from "react"
import { chain, keys } from "lodash"
import { Link } from "react-router-dom"

import AlbumCard from "../components/AlbumCard"
import data from "../data.js"

function Monthly() {
  const months = chain(data.monthly2018.items).map("month").uniq().value()
  return (
    <div>
      <h1>{data.monthly2018.title}</h1>
      {
        months.map(month => (
          <section>
            <h2>{month}</h2>
            {
              data.monthly2018.items.filter(a => a.month == month).map((a, i) => (
                <AlbumCard album={a} />
              ))
            }
          </section>
        ))
      }
    </div>
  )
}

export default Monthly
