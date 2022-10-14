import React from 'react'
import Logo from '../assets/supra.png'

const Navbar = () => {
  return (
    <div className='flex bg-slate-800 w-screen h-[80px]'>
        <div className='flex justify-center ml-5'>
            <img src={Logo} alt="supra-logo" className='' />
        </div>
        <div className='flex justify-center items-center w-screen'>
            <ul className='flex space-x-4 items-center justify-center text-yellow-400 text-xl '>
                <li className='hover:text-orange-500 cursor-pointer'>Listar Carros</li>
                <li className='hover:text-orange-500 cursor-pointer'>Gerenciar Carros</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar