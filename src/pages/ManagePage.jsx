import React from 'react'
import Navbar from '../components/Navbar'
import { Formik } from 'formik';
import { Notify } from 'notiflix';

export const ManagePage = () => {
  return (
    <>
    <Navbar/>
    <div className= "w-screen h-[91.7vh] bg-slate-500 flex flex-col items-center">
      <h1 className='text-3xl font-bold text-white mt-6'>Can you add a new car here!</h1>
        <Formik
          initialValues={{
            nome_carro: '',
            marca_carro: '',
            potencia_carro: '',
            ano_carro: '',
            preco_carro: '',
            foto_carro: ''
          }}
          validate={values => {
            if (!values.nome_carro || !values.marca_carro || !values.ano_carro || !values.potencia_carro || !values.preco_carro || !values.foto_carro){
              Notify.failure('Preenche tudo, burro')
            }
          }}
          onSubmit={(values, {setSubmitting}) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400)
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
            <div className='bg-black mt-6 '>            
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
              </form>
            </div>
          )}
        </Formik>
      </div>
    </>
  )
}
