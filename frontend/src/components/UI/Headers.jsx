import { NavLink } from "react-router-dom"

export const Headers = () => {
  return (
    <header className="h-20 bg-gray-900">
      <div className="max-w-[90%] mx-auto flex items-center justify-between h-full">
        
        <div className="relative w-16 h-16">
          <div className="absolute w-full h-full border-2 border-white rounded-full"></div>
            <NavLink to="/">
            <img src={`${import.meta.env.BASE_URL}Logo.jpeg`} alt="Logo" className="w-full h-full rounded-full"/></NavLink>
          </div>

          <nav>
            <ul className="flex text-lg font-medium gap-8">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/contact">Contact Us</NavLink></li>
              <li><NavLink to="/events">Event</NavLink></li>
              <li><NavLink to="/feedback">Feedback</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
            </ul>
          </nav>

          <div className="flex font-medium gap-4">
          <button className="bg-indigo-500 hover:bg-indigo-600">Login</button>
          <button className="text-gray-300 bg-gray-500 hover:bg-gray-600">Sign Up</button>
        </div>
        </div>
    </header>
  )
}
