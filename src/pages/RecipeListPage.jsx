import RecipeCard from '../components/RecipeCard.jsx'
import { recipes } from '../data/recipes.js'

export default function RecipeListPage() {
  return (
    <section>
      <h1>Recipes</h1>
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  )
}
