import React from 'react'
import Navbar from '../components/Navbar'
import { Formik } from 'formik';
import { Notify } from 'notiflix';
import axios from 'axios';

export const ManagePage = () => {
  return (
    <>
    <Navbar/>
    <div className= "w-screen h-[91.7vh] bg-[#f1faee] flex flex-col items-center">
      <h1 className='text-3xl font-bold text-black mt-6'>Preencha os campos para adicionar um novo carro!</h1>
        <Formik
          initialValues={{
            nome_carro: '',
            marca_carro: '',
            potencia_carro: '',
            ano_carro: '',
            preco_carro: '',
            foto_carro: '',
          }}
          onSubmit={(values, {setSubmitting}) => {
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
            handleSubmit,
            isSubmitting
          }) => (
            <div className='bg-slate-800 mt-6 w-[40vh] h-[30vw] flex items-center justify-center rounded-md'>            
              <form className='flex flex-col' onSubmit={handleSubmit}>
                <input
                className='w-[30vh] h-[2vw] text-center rounded-md'
                type="text"
                name="nome_carro"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Nome do carro...'
                value={values.nome_carro}
                />
                {touched.nome_carro}
                <input
                className='mt-6 w-[30vh] h-[2vw] text-center rounded-md'
                type="text"
                name="marca_carro"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Marca do carro...'
                value={values.marca_carro}
                />
                {touched.marca_carro}
                <input
                className='mt-6 w-[30vh] h-[2vw] text-center rounded-md'
                type="number"
                name="potencia_carro"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Potência do carro...'
                value={values.potencia_carro}
                />
                {touched.potencia_carro}
                <input
                className='mt-6 w-[30vh] h-[2vw] text-center rounded-md'
                type="number"
                name="ano_carro"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Ano do carro...'
                value={values.ano_carro}
                />
                {touched.ano_carro}
                <input
                className='mt-6 w-[30vh] h-[2vw] text-center rounded-md'
                type="number"
                name="preco_carro"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder='Preço do carro...'
                value={values.preco_carro}
                />
                {touched.preco_carro}
                <input
                className='ml-8 mt-6 w-[20vh] h-[2vw] text-center rounded-sm'
                type="file"
                name="foto_carro"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.foto_carro}
                />
                {touched.foto_carro}
                <button className='mt-6 bg-[#ffb703] h-[4vh] text-white rounded-sm hover:bg-[#db9e04]' type="submit">
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
