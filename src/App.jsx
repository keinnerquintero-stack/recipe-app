import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import RecipeListPage from './pages/RecipeListPage.jsx'
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
          <Route path="add" element={<AddRecipePage />} />
        </Routes>
      </main>
      <footer className="site-footer">Recipe Box - simple recipes, easy search.</footer>
    </RecipesProvider>
  )
}
