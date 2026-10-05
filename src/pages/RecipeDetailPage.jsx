import { Link, useParams } from 'react-router-dom'
import RecipeDetail from '../components/RecipeDetail.jsx'
import { useRecipes } from '../context/useRecipes.js'

export default function RecipeDetailPage() {
  const { id } = useParams()
  const { recipes } = useRecipes()
  const recipe = recipes.find((r) => r.id === id)

  return (
    <section>
      <Link to="/" className="back-link">← Back to all recipes</Link>
      {recipe ? (
        <RecipeDetail recipe={recipe} />
      ) : (
        <div className="empty">
          <h1>Recipe not found</h1>
          <p>We could not find that recipe. It may have been removed.</p>
          <Link to="/" className="btn btn-primary">Browse recipes</Link>
        </div>
      )}
    </section>
  )
}
