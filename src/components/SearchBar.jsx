export default function SearchBar({ value, onChange }) {
  return (
    <form className="search" role="search" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="recipe-search">Search recipes</label>
      <input
        id="recipe-search"
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by name, ingredient or tag (e.g. pasta, vegan)"
        autoComplete="off"
      />
      {value && (
        <button type="button" className="btn btn-outline btn-small" onClick={() => onChange('')}>
          Clear
        </button>
      )}
    </form>
  )
}
