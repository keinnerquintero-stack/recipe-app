import RecipeCard from '../components/RecipeCard.jsx'

// Stage 1: one hand-written sample recipe to build the basic UI. Real data comes next.
const placeholder = {
  id: 'sample',
  title: 'Classic Tomato Pasta',
  description: 'A quick weeknight pasta with a simple garlic and tomato sauce.',
  category: 'Dinner',
  emoji: '🍝',
  prepMinutes: 10,
  cookMinutes: 20,
  servings: 4,
  difficulty: 'Easy',
}

export default function RecipeListPage() {
  return (
    <section>
      <h1>Recipes</h1>
      <div className="recipe-grid">
        <RecipeCard recipe={placeholder} />
      </div>
    </section>
  )
}
