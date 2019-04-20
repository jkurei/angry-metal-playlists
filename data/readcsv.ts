const fs = require("fs")
const beautify = require("json-beautify")

/**
 * 
 * this is a most naive and unsafe way to read csv files
 * 
 * it doesnt contemplate quoted fields or anything, so... 
 * 
 * don't use it
 * 
 */

function readCsvSync(pathToFile) {
  const wholeTable = fs.readFileSync(pathToFile, { encoding: "utf8" })
    .split("\n")                              // split in lines
    .filter(x => x.trim())                     // discard empty lines
    .map(line => line.split(","))             // split in fields
    .map(row => row.map(field => field.trim())) // trim them cos spaces are bad
    
  const columnNames = wholeTable[0]
  const table = wholeTable.slice(1)
  
  const result = table.map(row => (
    columnNames.reduce(
      (accum, coln, i) => {
        accum[coln]= row[i]
        return accum
      },
      {}
    )
  ))
  
  return result
}

export default readCsvSync

module.exports = {
  default: readCsvSync
}

// if (typeof require != 'undefined' && require.main==module) {
//   const lists = readCsvSync("./lists.csv")
//   const albums = readCsvSync("./albums.csv")
  
//   const result = lists.map(list => ({
//     ...list,
//     items: albums.filter(a => a.list == list.id)
//   }))
  
//   console.log(beautify(
//     result,
//     null, 2, 100
//   ))
// }