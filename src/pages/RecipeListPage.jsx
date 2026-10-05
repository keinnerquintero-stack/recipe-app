import RecipeCard from '../components/RecipeCard.jsx'
import { useRecipes } from '../context/RecipesContext.jsx'

export default function RecipeListPage() {
  const { recipes } = useRecipes()

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
