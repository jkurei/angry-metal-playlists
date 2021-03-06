import React from "react"
import { chain, keys } from "lodash"
import { Link } from "react-router-dom"
import beautify from "json-beautify"
import Json from 'react-json-view'
import Markdown from "react-markdown"

import AlbumCard from "../components/AlbumCard"
import lists from "../data.js"

// #TODO shouldnt use the monthly flag, but detect sections

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
        list.description && (
          <Markdown source={list.description} />
        )
      }
      {
        list.monthly && months.map(month => (
          <section>
            <h2>{month}</h2>
            {
              list.items.filter(a => a.section == month).map((a, i) => (
                <AlbumCard key={a.title} album={a} />
              ))
            }
          </section>
        ))
      }
      {
        !list.monthly && (
          list.items.map((a, i) => (
            <AlbumCard key={a.title} album={a} />
          ))
        )
      }
      
      <h3>Debugging information</h3>
      <Json src={{ props, list, months, listId: props.match.params.id }} collapsed={1} />
    </div>
  )
}

export default List
