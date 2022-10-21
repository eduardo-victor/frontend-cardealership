import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Notify } from 'notiflix';
import {  useNavigate } from 'react-router-dom';

import axios from 'axios';

const PageList = () => {
  
  const navigate = useNavigate();
  const [carros, setCarros] = useState([]);
  
  function callApi(){
    axios.get('http://127.0.0.1:8000/carros/')
    .then((res) => {
      setCarros(res.data)
    })
  }

  useEffect(() => {
    callApi()
  }, []);

  async function deleteMethod(id){

    console.log('chegou aqui')
    var url = `http://127.0.0.1:8000/carros/${id}`
    
    Confirm.show(
      'Deletar card',
      'Deseja deletar este card?',
      'Sim',
      'Não',
  
      () => {
          axios.delete(url)
          .then(()  =>{
            Notify.success('Carro deletado com sucesso.')
            window.location.reload()
          })
      },
  
      () => {
          console.log('n quis')
      }
    )
  }

  return (
    <>
        <div className='w-screen flex justify-center py-10 items-center bg-slate-500'>
          <div className='grid grid-cols-4 gap-10'>
          {carros.map((carro) =>{
            return (
              <>
              <Card
                  id_carro = {carro.id_carro}
                  marca_carro = {carro.marca_carro}
                  foto_carro = {carro.foto_carro}
                  nome_carro = {carro.nome_carro}
                  ano_carro = {carro.ano_carro}
                  potencia_carro = {carro.potencia_carro}
                  preco_carro = {carro.preco_carro}
                  deleteMethod = {() => {deleteMethod(carro.id_carro)}}
                />
              </>  
              )  
            })}
          </div>
        </div>
    </>
  )
}

export default PageList