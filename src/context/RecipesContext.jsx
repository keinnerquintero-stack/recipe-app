import { useCallback, useMemo, useState } from 'react'
import { recipes as seedRecipes } from '../data/recipes.js'
import { loadUserRecipes, saveUserRecipes } from '../utils/storage.js'
import { RecipesContext } from './useRecipes.js'

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
