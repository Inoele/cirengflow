import { Search } from 'lucide-react'

function SearchBox({ query, setQuery }) {
  return (
    <div className="search-wrap">
      <Search size={17} />
      <input
        placeholder="Cari data..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  )
}

export default SearchBox

