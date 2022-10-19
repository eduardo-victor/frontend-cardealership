import React from 'react'

const Card = (props) => {
  return (
        <div className='flex flex-col w-[18vw] h-[45vh] bg-slate-800 rounded-md shadow-lg ml-6'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='mt-4 text-white font-bold'>{props.marca_carro}</h1>
                <div className='flex  items-center justify-center mt-4'>
                    <img src={props.foto_carro} alt="img-card" className='flex items-center justify-center w-[18vw] h-[30vh]' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-white font-semibold'>Modelo: <span>{props.nome_carro}</span></h1>
                    <h1 className='text-white font-semibold'>Ano: {props.ano_carro}</h1>
                    <h1 className='text-white font-semibold'>Potência: {props.potencia_carro}</h1>
                </div>
                <button className='text-white bg-red-600 w-[18vw] h-[4vh] rounded-sm mt-2 hover:text-black hover:bg-red-700'>Delete</button>
            </div>
        </div>
  )
}

export default Card