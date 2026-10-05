import { Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header.jsx'
import RecipeListPage from './pages/RecipeListPage.jsx'
import RecipeDetailPage from './pages/RecipeDetailPage.jsx'
import AddRecipePage from './pages/AddRecipePage.jsx'
import { RecipesProvider } from './context/RecipesContext.jsx'

export default function App() {
  return (
    <RecipesProvider>
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main" className="container">
        <Routes>
          <Route index element={<RecipeListPage />} />
          <Route path="recipes/:id" element={<RecipeDetailPage />} />
          <Route path="add" element={<AddRecipePage />} />
          <Route
            path="*"
            element={
              <div className="empty">
                <h1>Page not found</h1>
                <Link to="/" className="btn btn-primary">Back to recipes</Link>
              </div>
            }
          />
        </Routes>
      </main>
      <footer className="site-footer">Recipe Box - simple recipes, easy search.</footer>
    </RecipesProvider>
  )
}
