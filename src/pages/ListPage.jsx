import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import Notiflix, { Notify } from 'notiflix';
import axios from 'axios';

const PageList = () => {
  
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

  async function deleteMethod(props){

    var url = `http://127.0.0.1:8000/carros/${props.id_carro}`
  
    Confirm.show(
      'Deletar card',
      'Deseja deletar este card?',
      'Sim',
      'Não',
  
      () => {
          axios.delete(url)
          .then(()  =>{
            Notify.success('Carro deletado com sucesso.')
          })
      },
  
      () => {
          console.log('n quis')
      }
    )
  }

  return (
    <>
        <div className='w-screen flex justify-center items-center grid grid-cols-4 gap-4 bg-slate-500'>
          {carros.map((carro) =>{
            return (
              <>
              <Card
                  key = {carro.id_carro}
                  marca_carro = {carro.marca_carro}
                  foto_carro = {carro.foto_carro}
                  nome_carro = {carro.nome_carro}
                  ano_carro = {carro.ano_carro}
                  potencia_carro = {carro.potencia_carro}
                  preco_carro = {carro.preco_carro}
                  deleteMethod = {deleteMethod}
                />
                
              </>  
            )  
          })}
          </div>
    </>
  )
}

export default PageList