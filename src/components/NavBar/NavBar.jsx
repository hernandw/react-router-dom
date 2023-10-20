import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
      <div>Logo</div>
          <div className='menu'>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
      </div>
    </nav>
  )
}

export default NavBar
