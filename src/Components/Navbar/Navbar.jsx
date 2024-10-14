import { Link, useNavigate } from 'react-router-dom'
/*import {useSelector,useDispatch}from 'react-redux'*/
import Avatar from '../Avatar/Avatar';
import "./Navbar.css"
function Navbar(handleslidein) {
  var User = null;
  const navigate = useNavigate()
  return (
    <nav className="main-nav">
      <div className="navbar">
        <button className="slide-in-icon" onClick={() => handleslidein}>
          <img src="/menu.jpg" alt="slide-icon" width={20} />
        </button>

        <Link className='nav-logo'>
          <img src="/Stack_Overflow-Logo.png" alt="Logo" width={100} />
        </Link>
        <Link className='nav-link'>About</Link>

        <Link className='nav-link'>Products</Link>

        <Link className='nav-link'>For Teams</Link>

        <form action="">
          <input type="text" placeholder='Search......' />
          <img className='search-icon' src="/search-icon.png" alt="search" width={20} />
        </form>

        <div className='navbar-2'>
          {User === null ? (
            <Link className='nav-btn' to="/Auth.jsx" >Log in</Link>
          ) : (
            <>
              <Avatar backgroundcolor="009dff" px={10} py={7} borderRadius={50} color={"white"}> </Avatar>
              <Link style={{ color: "white", textDecoration: "none" }} className='nav-btn'>Log out</Link>
            </>
          )}
        </div>
      </div>
    </nav>


  )
}

export default Navbar
