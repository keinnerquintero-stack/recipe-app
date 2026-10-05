export const CATEGORIES = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Snack']
export const DIFFICULTIES = ['Easy', 'Medium', 'Hard']

const emojiByCategory = { Breakfast: '🍳', Lunch: '🥪', Dinner: '🍽️', Dessert: '🍰', Snack: '🥨' }

const blank = (v) => !v || !String(v).trim()
const lines = (text) => text.split('\n').map((l) => l.trim()).filter(Boolean)

export function validateRecipe(v) {
  const errors = {}
  if (blank(v.title)) errors.title = 'Title is required.'
  else if (v.title.trim().length < 3) errors.title = 'Title must be at least 3 characters.'
  if (blank(v.description)) errors.description = 'A short description is required.'
  for (const key of ['prepMinutes', 'cookMinutes']) {
    const n = Number(v[key])
    if (v[key] === '' || !Number.isInteger(n) || n < 0 || n > 1440) errors[key] = 'Enter whole minutes (0 or more).'
  }
  const servings = Number(v.servings)
  if (!Number.isInteger(servings) || servings < 1 || servings > 100) errors.servings = 'Servings must be 1-100.'
  if (lines(v.ingredients).length < 2) errors.ingredients = 'Add at least 2 ingredients, one per line.'
  if (lines(v.steps).length < 1) errors.steps = 'Add at least 1 step, one per line.'
  return errors
}

// Convert the raw form values into the same shape the sample data uses.
export function toRecipe(v) {
  return {
    title: v.title.trim(),
    description: v.description.trim(),
    category: v.category,
    cuisine: v.cuisine.trim() || 'Home cooking',
    emoji: emojiByCategory[v.category],
    prepMinutes: Number(v.prepMinutes),
    cookMinutes: Number(v.cookMinutes),
    servings: Number(v.servings),
    difficulty: v.difficulty,
    ingredients: lines(v.ingredients),
    steps: lines(v.steps),
    tags: v.tags.split(',').map((t) => t.trim().toLowerCase()).filter(Boolean),
  }
}
