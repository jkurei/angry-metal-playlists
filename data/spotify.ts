const { green, blue, yellow } = require("chalk")
const { get, reverse, keyBy } = require("lodash")
const beautify = require("json-beautify")
const nfetch = require("node-fetch")
const spotifyWrapper = require('spotify-wrapper').default

// Get spotify token

function base64(s: string) {
  return (new Buffer(s)).toString('base64')
  // return Buffer.from(s, 'base64').toString('ascii')
}

export function getToken(): Promise<string> {
  const clientId = "fb3fba114aec46d381e040cadbec054a"
  const clientSecret = "7d4e001b098a4cfea4e9f106d723649f"
  const authorization = "Basic " + base64(clientId + ":" + clientSecret)

  console.error({
    clientId, 
    clientSecret, 
    authorization
  })

  // curl -X "POST" -H "Authorization: Basic XXX" -d grant_type=client_credentials https://accounts.spotify.com/api/token

  return nfetch("https://accounts.spotify.com/api/token", {
    method: "POST", 
    headers: {
      "Authorization": authorization,
      'Content-Type':'application/x-www-form-urlencoded'
    },
    body: "grant_type=client_credentials"
  })
    .then(response => response.json())
    .then(body => {
      console.error(body)
      return body.access_token
    })
    
  // https://developer.spotify.com/dashboard/applications/fb3fba114aec46d381e040cadbec054a
  // https://developer.spotify.com/documentation/general/guides/authorization-guide/#client-credentials-flow
  // https://github.com/willianjusten/spotify-wrapper/blob/master/examples/albums.js
}

let spotify = null

new spotifyWrapper({
  token: "BQCZR50lErlmwUuGQD5U5M3VlTh-gDRqjW2fSB88SOCzaPtC_uhSsVj32WNXLfyhoxrv77OUzgo1hZsVWZo"
});

export function init(): Promise<string> {
  return new Promise((yea, nope) => {
    getToken().then(token => {
      setTimeout(() => { 
        spotify = new spotifyWrapper({ token }) 
        yea(token)
      })
    })
  })
}

export async function getAlbum(artist: string, album: string): Promise<string> {
  console.error(`getAlbum(${artist}, ${album})`)
  const data = await spotify.search.albums(encodeURIComponent(`${artist}, ${album}`))
  return get(data, "albums.items[0].external_urls.spotify", null)
}

// #TODO this doesnt work. idk why.
// i cant find the track here https://developer.spotify.com/console/get-search-item/
export async function getSong(artist: string, title: string): Promise<string> {
  const data = await spotify.search.tracks(encodeURIComponent(`${artist}, ${title}`))
  // return data
  return get(data, "albums.items[0].external_urls.spotify", null)
}


if (typeof require != 'undefined' && require.main==module) {
  getToken().then(uri => console.error(green(" => ") + uri))
  //getAlbum("Tribulation", "Down Below").then(x => console.error(beautify(x, null, 2, 100)))
  //getSong("Amorphis", "Among Stars").then(x => console.error(beautify(x, null, 2, 100)))
}