import { Link } from 'react-router-dom';
import React from 'react'
import Logo from '../assets/supra.png'

const Navbar = () => {
  return (
    <div className='flex bg-slate-800 w-screen h-[80px]'>
      <div className='flex items-center justify-between w-screen'>
            <ul className='flex space-x-4 text-yellow-400 text-xl items-center'>
                <Link to="/" className='w-[120px] h-[80px]'><img src={Logo} alt="supra-logo"/></Link>
                <Link to="/list-cars" className='hover:text-[#FB8500] cursor-pointer'>Listar carros</Link>
                <Link to="/manage-cars" className='hover:text-[#FB8500] cursor-pointer'>Gerenciar carros</Link>
            </ul>
      </div>
      </div>    
  )
}

export default Navbar