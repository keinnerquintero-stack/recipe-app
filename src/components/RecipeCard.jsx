// Card used on the list page: emoji "photo", title, short description and quick facts.
export default function RecipeCard({ recipe }) {
  const totalTime = recipe.prepMinutes + recipe.cookMinutes

  return (
    <article className="card recipe-card">
      <div className={`card-image cat-${recipe.category.toLowerCase()}`} aria-hidden="true">{recipe.emoji}</div>
      <div className="card-body">
        <p className="badge">{recipe.category}</p>
        <h2 className="card-title">{recipe.title}</h2>
        <p className="card-text">{recipe.description}</p>
        <ul className="facts" aria-label="Recipe facts">
          <li>⏱ {totalTime} min</li>
          <li>🍽 {recipe.servings} servings</li>
          <li>📶 {recipe.difficulty}</li>
        </ul>
      </div>
    </article>
  )
}
