import { useSearchParams } from 'react-router-dom'
import RecipeCard from '../components/RecipeCard.jsx'
import SearchBar from '../components/SearchBar.jsx'
import { useRecipes } from '../context/useRecipes.js'
import { searchRecipes } from '../utils/searchRecipes.js'

export default function RecipeListPage() {
  const { recipes } = useRecipes()
  // The query lives in the URL (?search=...) so it survives refresh and Back/Forward.
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('search') ?? ''

  const setQuery = (value) => {
    setSearchParams(value.trim() ? { search: value } : {}, { replace: true })
  }

  const results = searchRecipes(recipes, query)
  const searching = query.trim() !== ''

  return (
    <section>
      <h1>Recipes</h1>
      <div className="toolbar">
        <SearchBar value={query} onChange={setQuery} />
      </div>

      <p className="result-count" role="status">
        {searching
          ? `${results.length} ${results.length === 1 ? 'recipe' : 'recipes'} found for "${query.trim()}"`
          : `${recipes.length} recipes`}
      </p>

      {results.length > 0 ? (
        <div className="recipe-grid">
          {results.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No recipes match "{query.trim()}"</h2>
          <p>Try a different word, such as an ingredient or a category.</p>
          <button type="button" className="btn btn-primary" onClick={() => setQuery('')}>
            Clear search
          </button>
        </div>
      )}
    </section>
  )
}
