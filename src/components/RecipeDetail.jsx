// Full recipe card: header image, quick facts, ingredients and numbered steps.
export default function RecipeDetail({ recipe }) {
  const totalTime = recipe.prepMinutes + recipe.cookMinutes

  return (
    <article className="card detail">
      <div className={`card-image cat-${recipe.category.toLowerCase()}`} aria-hidden="true">{recipe.emoji}</div>
      <div className="detail-body">
        <p className="badge">{recipe.category} · {recipe.cuisine}</p>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>

        <dl className="detail-meta">
          <div className="meta-item"><dt>Prep</dt><dd>{recipe.prepMinutes} min</dd></div>
          <div className="meta-item"><dt>Cook</dt><dd>{recipe.cookMinutes} min</dd></div>
          <div className="meta-item"><dt>Total</dt><dd>{totalTime} min</dd></div>
          <div className="meta-item"><dt>Servings</dt><dd>{recipe.servings}</dd></div>
          <div className="meta-item"><dt>Difficulty</dt><dd>{recipe.difficulty}</dd></div>
        </dl>

        <div className="detail-columns">
          <section aria-labelledby="ingredients-heading">
            <h2 id="ingredients-heading">Ingredients</h2>
            <ul>
              {recipe.ingredients.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
          <section aria-labelledby="steps-heading">
            <h2 id="steps-heading">Directions</h2>
            <ol>
              {recipe.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </section>
        </div>

        {recipe.tags.length > 0 && (
          <ul className="tags" aria-label="Tags">
            {recipe.tags.map((tag) => (
              <li key={tag}>#{tag}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}
