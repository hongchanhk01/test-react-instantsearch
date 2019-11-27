import * as React from "react"
import algoliasearch from "algoliasearch/lite"
import {
  InstantSearch,
  SearchBox,
  Hits,
  Index,
  Configure
} from "react-instantsearch-dom"
import NoResults from "./NoResults"

const searchClient = algoliasearch(
  "HHJTZS1WFX",
  "5f47146672db72efc125af33441aff99"
)

const App = () => {
  const [query, setQuery] = React.useState("")
  const onSearch = React.useCallback(e => setQuery(e.target.value), [])
  return (
    <>
      <InstantSearch indexName="people" searchClient={searchClient}>
        <input type="text" onChange={onSearch} value={query} />
        <Index indexId="people" indexName="people">
          <Configure query={query} />
          <Hits />
        </Index>
        <Index indexId="starships" indexName="starships">
          <Configure query={query} />
          <Hits />
        </Index>
        <NoResults />
      </InstantSearch>
    </>
  )
}

export default App
