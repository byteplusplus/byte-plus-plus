import { NavLink } from "react-router-dom"
import Logo from "/Logo.jpeg"
import './Headers.css'

export const Headers = () => {
  return (
    <header className="h-20 bg-gray-900">
      <div className="max-w-[90%] mx-auto flex items-center justify-between h-full">
        
        <div className="relative w-16 h-16 cursor-pointer">
          <NavLink to="/">
            <img src={Logo} alt="Logo" className="w-full h-full rounded-full byte_logo" />
          </NavLink>
          <div className="star pointer-events-none"><i class="fa-solid fa-star star-icon-manage"></i></div>
        </div>

        <nav>
          <ul className="flex text-lg font-medium gap-8">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
            <li><NavLink to="/#">Event</NavLink></li>
            <li><NavLink to="/feedback">Feedback</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
        </nav>
        <div className="flex font-medium gap-4">
          <NavLink to='/login'>
            <button className="bg-indigo-500 hover:bg-indigo-600">Login</button>
          </NavLink>
          <NavLink to='/signup'>
            <button className="text-gray-300 bg-gray-500 hover:bg-gray-600">Sign Up</button>
          </NavLink>
        </div>
      </div>
    </header>
  )
}