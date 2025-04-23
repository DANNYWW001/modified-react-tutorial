import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
      <nav className="bg-black text-white flex justify-between items-center h-[80px] container">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div className="flex gap-3 items-center">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login" className='btn btn-primary'>Login In</Link>
        </div>
      </nav>
    </div>
  );
}
