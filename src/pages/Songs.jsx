import React from "react"
import { keys } from "lodash"
import { Link } from "react-router-dom"

import data from "../data.js"

function Songs() {
  return (
    <div>
      <ul>
        {
          keys(data).map(k => (
            <li key={k}>
              <Link to="/k">
                {data[k].title}
              </Link>
            </li>
          ))
        }        
      </ul>
    </div>
  )
}

export default Songs