// Case-insensitive search. Every word typed must match somewhere in the recipe's
// title, description, category, cuisine, tags or ingredients.
export function searchRecipes(recipes, query) {
  const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean)
  if (words.length === 0) return recipes

  return recipes.filter((recipe) => {
    const haystack = [
      recipe.title,
      recipe.description,
      recipe.category,
      recipe.cuisine,
      ...recipe.tags,
      ...recipe.ingredients,
    ]
      .join(' ')
      .toLowerCase()
    return words.every((word) => haystack.includes(word))
  })
}
