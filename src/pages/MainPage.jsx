import React from 'react'
import Navbar from '../components/Navbar'

export const MainPage = () => {
  return (
    <>
      <Navbar />
      <div className='w-screen h-[91.7vh] flex items-center justify-center bg-slate-500'>
        <h1 className='text-3xl text-white'>Welcome, something is here ;D</h1>
      </div>
    </>
  )
}
