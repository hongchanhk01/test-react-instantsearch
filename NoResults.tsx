import * as React from "react"
import { connectStateResults } from "react-instantsearch-dom"

const NoResults = ({ allSearchResults }) => {
  console.log(allSearchResults)
  return <h1>No Results</h1>
}

export default connectStateResults(NoResults)
