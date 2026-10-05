import { createContext, useContext } from 'react'

export const RecipesContext = createContext(null)

export function useRecipes() {
  const ctx = useContext(RecipesContext)
  if (!ctx) throw new Error('useRecipes must be used inside <RecipesProvider>')
  return ctx
}
