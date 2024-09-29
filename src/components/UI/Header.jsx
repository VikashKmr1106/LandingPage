import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='bg-slate-600 container-fluid'>
      <div className='container flex justify-between mx-auto py-4 text-white'>
        <div className="logo">
          <NavLink to='/' className={({ isActive }) => (isActive ? 'text-yellow-300' : 'text-white')}>
            <h1 className='text-3xl font-semibold'>WorldAtlas</h1>
          </NavLink>
        </div>

        <nav className='flex items-center justify-between gap-6'>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? 'text-yellow-300' : 'text-white')}
          >
            <h1 className='text-lg font-semibold'>Home</h1>
          </NavLink>
          <NavLink
            to='/about'
            className={({ isActive }) => (isActive ? 'text-yellow-300' : 'text-white')}
          >
            <h1 className='text-lg font-semibold'>About</h1>
          </NavLink>
          <NavLink
            to='/country'
            className={({ isActive }) => (isActive ? 'text-yellow-300' : 'text-white')}
          >
            <h1 className='text-lg font-semibold'>Country</h1>
          </NavLink>
          <NavLink
            to='/contact'
            className={({ isActive }) => (isActive ? 'text-yellow-300' : 'text-white')}
          >
            <h1 className='text-lg font-semibold'>Contact</h1>
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
