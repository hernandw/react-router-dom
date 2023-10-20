import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
      <div>Logo</div>
          <div className='menu'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default NavBar
