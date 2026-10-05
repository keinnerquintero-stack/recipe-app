import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand"><span aria-hidden="true">🍲</span> Recipe Box</Link>
        <nav aria-label="Primary" className="nav-links">
          <NavLink to="/" end>Recipes</NavLink>
          <NavLink to="/add">Add Recipe</NavLink>
        </nav>
      </div>
    </header>
  )
}
