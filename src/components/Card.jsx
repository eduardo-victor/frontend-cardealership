import React from 'react'

const Card = (props) => {
    
    

    return (    
        <div key={props.id_carro} className='flex flex-col w-[18vw] bg-slate-800 rounded-md shadow-lgml-12'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='mt-4 text-white font-bold'>{props.marca_carro}</h1>
                <div className='flex  items-center justify-center mt-4'>
                    <img src={props.foto_carro} alt="img-card" className='flex items-center justify-center w-[18vw] h-[30vh]' />
                </div>
                <div className='flex flex-col items-center justify-center mt-3'>
                    <h1 className='text-white font-semibold'>Modelo: <span>{props.nome_carro}</span></h1>
                    <h1 className='text-white font-semibold'>Ano: {props.ano_carro}</h1>
                    <h1 className='text-white font-semibold'>Potência: {props.potencia_carro}hp</h1>
                    <h1 className='text-white font-semibold'>Preço: R${props.preco_carro}</h1>
                    <button className='text-white bg-red-600 w-[18vw] h-[4vh] rounded-sm mt-7 hover:text-black hover:bg-red-700' onClick={props.deleteMethod}>Delete</button>
                </div>
            </div>
        </div>
  )
}

export default Card