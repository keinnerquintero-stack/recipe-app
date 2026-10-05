import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import RecipeListPage from './pages/RecipeListPage.jsx'

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main" className="container">
        <Routes>
          <Route index element={<RecipeListPage />} />
        </Routes>
      </main>
      <footer className="site-footer">Recipe Box - simple recipes, easy search.</footer>
    </>
  )
}
