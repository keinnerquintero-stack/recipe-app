import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { recipes as seedRecipes } from '../data/recipes.js'
import { loadUserRecipes, saveUserRecipes } from '../utils/storage.js'

const RecipesContext = createContext(null)

export function RecipesProvider({ children }) {
  const [userRecipes, setUserRecipes] = useState(loadUserRecipes)

  const addRecipe = useCallback((recipe) => {
    const id = `user-${Date.now().toString(36)}`
    const created = { ...recipe, id }
    setUserRecipes((prev) => {
      const next = [created, ...prev]
      saveUserRecipes(next)
      return next
    })
    return id
  }, [])

  const recipes = useMemo(() => [...userRecipes, ...seedRecipes], [userRecipes])
  const value = useMemo(() => ({ recipes, addRecipe }), [recipes, addRecipe])

  return <RecipesContext.Provider value={value}>{children}</RecipesContext.Provider>
}

export function useRecipes() {
  const ctx = useContext(RecipesContext)
  if (!ctx) throw new Error('useRecipes must be used inside <RecipesProvider>')
  return ctx
}
