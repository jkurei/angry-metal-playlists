import React from "react"
import { chain, keys } from "lodash"
import { Link } from "react-router-dom"
import beautify from "json-beautify"
import Json from 'react-json-view'

import AlbumCard from "../components/AlbumCard"
import lists from "../data.js"

function List(props) {
  // return (
  //   <>
  //   <h1>{props.match.params.id}</h1>
  //   <Json src={props} />
  //   </>
  // )
  
  const listId = props.match.params.id
  console.log(props)
  const list = lists.find(list => list.id == listId)

  const months = (
    list.monthly 
      ? chain(list.items).map("section").uniq().value()  
      : []
  )
  
  return (
    <div>
      <h1>{list.title}</h1>
      {
        list.monthly && months.map(month => (
          <section>
            <h2>{month}</h2>
            {
              list.items.filter(a => a.section == month).map((a, i) => (
                <AlbumCard album={a} />
              ))
            }
          </section>
        ))
      }
      {
        !list.monthly && (
          list.items.map((a, i) => (
            <AlbumCard album={a} />
          ))
        )
      }
      
      <h1>{props.match.params.id}</h1>
      <Json src={{ props, list, months }} collapsed={1} />
    </div>
  )
}

export default List
