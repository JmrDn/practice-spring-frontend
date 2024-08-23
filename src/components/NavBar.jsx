import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='w-screen h-[100px] bg-gray-800 fixed inset-0'>
        <nav className='container  h-full mx-auto p-[20px] lg:px-[100px] lg:py-[50px] flex items-center justify-between '>

            <NavLink className='text-white text-3xl'>Practice.<span className='text-green-500 font-semibold'>Spring</span></NavLink>
            <NavLink to='/add-user' className='p-3 rounded-lg bg-green-600 text-white'>Add User</NavLink>
        </nav>
      
    </div>
  )
}

export default NavBar
