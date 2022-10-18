import { Link } from 'react-router-dom';
import React from 'react'
import Logo from '../assets/supra.png'

const Navbar = () => {
  return (
    <div className='flex bg-slate-800 w-screen h-[80px]'>
        <div className='flex justify-center ml-5'>
            <Link to="/" className='flex justify-center'><img src={Logo} alt="supra-logo"/></Link>
        </div>
        <div className='flex justify-center items-center w-screen'>
            <ul className='flex space-x-4 items-center justify-center text-yellow-400 text-xl '>
                <Link to="/list-cars" className='hover:text-orange-500 cursor-pointer'>Listar carros</Link>
                <Link to="/manage-cars" className='hover:text-orange-500 cursor-pointer'>Gerenciar carros</Link>
                
            </ul>
        </div>
    </div>
    
  )
}

export default Navbar