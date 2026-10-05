import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand"><span aria-hidden="true">🍲</span> Recipe Box</Link>
      </div>
    </header>
  )
}
