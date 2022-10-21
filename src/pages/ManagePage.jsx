import React from 'react'
import Navbar from '../components/Navbar'
import { Formik } from 'formik';
import { Notify } from 'notiflix';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export const ManagePage = () => {
  const navigate = useNavigate();
  
  return (
    <>
    {/* <Navbar/> */}
    <div className= " h-screen bg-slate-500 flex flex-col items-center justify-center">
      <h1 className='text-3xl font-semibold text-yellow-400 mt-6'>Preencha os campos para adicionar um novo carro!</h1>
        <Formik
          initialValues={{
            nome_carro: '',
            marca_carro: '',
            potencia_carro: '',
            ano_carro: '',
            preco_carro:  '',
            foto_carro: ''
          }}
          onSubmit={(values) => {
            if (!values.nome_carro || !values.marca_carro || !values.ano_carro || !values.potencia_carro || !values.preco_carro || !values.foto_carro){
              Notify.warning('Oops! Preencha todos os campos :D')
            }
            else{
              axios.post('http://127.0.0.1:8000/carros/', values, {
                headers: { 'Content-Type': 'multipart/form-data' },
              })
              .then(res => {
                console.log(res)
              })
              .catch((err) => {
                console.log(err)
              })
            }
          }}
        >
          {({
            values,
            touched,
            handleChange,
            handleBlur,
            handleSubmit, setFieldValue
          }) => (
            <div className='bg-slate-800 mt-6 w-[55vh] h-[30vw] flex items-center justify-center rounded-md'>            
              <form className='flex flex-col' onSubmit={handleSubmit}>
                <input
                className='w-[35vh] h-[2vw] text-center rounded-sm'
                type="text"
                name="nome_carro"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Nome do carro...'
                value={values.nome_carro}
                />
                {touched.nome_carro}
                <input
                className='mt-6 w-[35vh] h-[2vw] text-center rounded-sm'
                type="text"
                name="marca_carro"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Marca do carro...'
                value={values.marca_carro}
                />
                {touched.marca_carro}
                <input
                className='mt-6 w-[35vh] h-[2vw] text-center rounded-sm'
                type="number"
                name="potencia_carro"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Potência do carro...'
                value={values.potencia_carro}
                />
                {touched.potencia_carro}
                <input
                className='mt-6 w-[35vh] h-[2vw] text-center rounded-sm'
                type="number"
                name="ano_carro"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Ano do carro...'
                value={values.ano_carro}
                />
                {touched.ano_carro}
                <input
                className='mt-6 w-[35vh] h-[2vw] text-center rounded-sm'
                type="number"
                name="preco_carro"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Preço do carro...'
                value={values.preco_carro}
                />
                {touched.preco_carro}
                <input id="foto_carro" className='ml-8 mt-6 w-[30vh] h-[2vw] text-center text-white rounded-sm' name="file" type="file" onChange={(event) => {
                  setFieldValue("foto_carro", event.currentTarget.files[0]);
                }} />
                {touched.foto_carro}
                <button className='mt-6 bg-[#ffb703] h-[4vh] text-white font-semibold rounded-sm hover:bg-[#db9e04]' type="submit">
                Cadastrar
                </button>
              </form>
            </div>
          )}
        </Formik>
      </div>
    </>
  )
}
