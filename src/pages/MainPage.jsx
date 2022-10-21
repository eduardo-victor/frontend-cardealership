import React from 'react'
// import {gif} from '../assets/drift-cars.gif'
import gif from '../assets/drift-cars.gif'

export const MainPage = () => {
  return (
    <>
      <div className='h-screen flex flex-col items-center justify-center bg-slate-500'>
        <h1 className='text-4xl text-white font-bold'>Welcome.</h1>
        <img className='' src={gif} alt="loading" />
      </div>
    </>
  )
}
