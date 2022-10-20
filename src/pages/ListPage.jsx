import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import axios from 'axios';
import { createSearchParams, json } from 'react-router-dom';

const PageList = () => {
  let url = 'http://127.0.0.1:8000/carros/'
  
  const [carros, setCarros] = useState([]);
  
  function callApi(){
    axios.get(url)
    .then((res) => {
      console.log(res.data)
      setCarros(res.data)
    })
  }

  useEffect(() => {
    callApi()
  }, [])

  return (
    <>
        {/* <Navbar/> */}
        <div className='w-screen flex justify-center items-center grid grid-cols-4 gap-4 bg-slate-500'>
          {carros.map((carro, key) =>{
            return (
                <Card
                  marca_carro = {carro.marca_carro}
                  foto_carro = {carro.foto_carro}
                  nome_carro = {carro.nome_carro}
                  ano_carro = {carro.ano_carro}
                  potencia_carro = {carro.potencia_carro}
                />
            )  
          })}
          </div>
    </>
  )
}

export default PageList