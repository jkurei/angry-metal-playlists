import React from "react"
import { keys } from "lodash"
import { Link } from "react-router-dom"

import "./Sidebar.scss"
import lists from "../data.js"

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        {
          lists.map(list => (
            <li key={list.id} >
              <Link to={`/list/${list.id}`}>
                {list.title}'
              </Link>
            </li>
          ))
        }      
      </ul>
    </nav>
  )
}

export default Sidebar
