import React from 'react'
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Aditya</span>
            <span className='text-slate-700'>Estate</span>
        </h1>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
            <input type="text" placeholder='search...' className='bg-transparent focus:outline-none w-24 sm:w-64' />
            <CiSearch className='text-slate-500' />
        </form>
        <ul className='flex gap-4'>
            <li className='hidden sm:inline'><Link to='/'>Home</Link></li>
            <li className='hidden sm:inline'><Link to='/About'>About</Link></li>
            <li><Link to='/Signup'>Sign Up</Link></li>
        </ul>
        </div>
    </header>
  )
}

export default Header