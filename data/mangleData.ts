const { green, blue, yellow } = require("chalk")
const { reverse, keyBy, get } = require("lodash")
const beautify = require("json-beautify")
const nfetch = require("node-fetch")
const fs = require("fs")

const readCsvSync = require("./readcsv")
const { getAlbum } = require("./spotify.ts")

/*
 */

type Album = {
  artist: string,
  album: string,
  thumbnailUrl: string,
  spotifyUrl?: string,
  rank?: number|null|string,
  section?: string|null
}

type Song = {
  artist: string,
  title: string,
  spotifyUrl?: string,
  thumbnailUrl?: string,
  rank?: number|null,  
}

type List<x> = {
  id: string,
  title: string,
  amgUrl: string,
  items: Array<x>,
  monthly?: boolean,  
  description?: string,
}


/**
 * better 
 */

async function getData() {
  const lists = readCsvSync("./lists.csv")
  const albums = readCsvSync("./albums.csv")
  
  await Promise.all(albums.map(async a => {
    a.spotifyUrl = await getAlbum(a.artist, a.album)
  }))
  
  const data = lists.map(list => ({
    ...list,
    items: albums.filter(a => a.list == list.id)
  }))
  
  return data
}

getData().then(data => {
  console.log(beautify(
    data,
    null, 2, 100
  ))
})


