const KEY = 'recipe-box:user-recipes'

// localStorage can be unavailable (private mode, blocked) or hold bad data: fail soft.
export function loadUserRecipes() {
  try {
    const parsed = JSON.parse(localStorage.getItem(KEY))
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function saveUserRecipes(list) {
  try {
    localStorage.setItem(KEY, JSON.stringify(list))
  } catch {
    // Ignore: recipes simply will not persist across reloads.
  }
}
