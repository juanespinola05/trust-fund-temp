import { useState, useEffect } from 'react'

const Button = ({children, handleChange, ...props}) => {
  return (
    <span {...props} className='rounded-md text-white font-light py-2 px-3 bg-brandBlue'> 
      <button onClick={handleChange}>
        {children}
      </button>
    </span>
  )
}

const Form = () => {
  const [alquiler, setAlquiler] = useState('vivienda')

  useEffect(() => {
    console.log(alquiler)
  }, [alquiler])
  

  return (
    <form className='rounded-lg shadow-xl min-h-[384px] w-full max-w-md bg-white m-auto py-6 px-2 grid place-content-center'>
      <div>
        <div className='flex justify-between'>
          <label className='text-slate-600'>Tipo de alquiler</label>
          <div className='flex gap-4 relative h-8 border-[3px_solid_#03579A]'>
            <div className={`absolute top-0 left-0 ${alquiler === 'vivienda' ? 'left-0' : 'right-0'} h-full w-[50%] bg-brandBlue z-0`}></div>
            <button onClick={() => setAlquiler('vivienda')} type='button'>Vivienda</button>
            <button onClick={() => setAlquiler('comercio')} type='button'>Comercio</button>
          </div>
        </div>
        <div className="flex gap-1   items-center justify-center mt-4">
          <p className='text-brandBlue text-xl'>$</p>
          <input
            placeholder='Monto de alquiler'
            type="text"
            className='w-full max-w-[300px] h-10 rounded-md bg-slate-100 px-2'
          />
        </div>
        <div className="flex gap-1 items-center justify-center mt-4">
          <p className='text-brandBlue text-xl'>$</p>
          <input
            placeholder='Monto de expensas'
            type="text"
            className='w-full max-w-[300px] h-10 rounded-md bg-slate-100 px-2'
          />
        </div>
        <div className="flex flex-wrap gap-3 mt-2 items-center flex-col">
          <p className='text-slate-600'>Duración de alquiler</p>
          <div className="flex gap-3 flex-wrap justify-center">
            <button type='button' className='py-2 px-3 bg-brandBlue text-white rounded-md'>36 Meses</button>
            <button type='button' className='py-2 px-3 bg-brandBlue text-white rounded-md'>48 Meses</button>
            <button type='button' className='py-2 px-3 bg-brandBlue text-white rounded-md'>60 Meses</button>
          </div>
        </div>
        <div className=' mt-12'>
          <button className='bg-brandBlue py-2 px-3 text-white rounded-md w-full'>Calcular</button>
        </div>
      </div>
    </form>
  )
}

export default Form