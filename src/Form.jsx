import { useState } from 'react'

const RadioButton = (props) => {
  const { changed, id, isSelected, label, value } = props;
  return (
    <div className="RadioButton">
      <input
        id={id}
        onChange={changed}
        value={value}
        type="radio"
        checked={isSelected}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};


const Form = () => {
  const [type, setType] = useState("vivienda");
  const [values, setValues] = useState({ alquiler: '', expensas: ''})
  
  const radioChangeHandler = (e) => {
    setType(e.target.value)
  }

  const formatNumber = (e) => {
    const fromInput = e.target.value.replace(/\.|\,/gi, '')
    if(isNaN(Number(fromInput))) return
    let formatted = new Intl.NumberFormat('es-AR', { currency: 'ARS'}).format(fromInput)
    if(formatted === '0') formatted = ''
    setValues(prev => ({...prev, [e.target.name]: formatted}))
  }

  return (
    <form className='rounded-lg shadow-xl min-h-[384px] w-full max-w-md bg-white m-auto py-6 px-2 grid place-content-center'>
      <div>
        <div className='flex justify-between'>
          <label className='text-slate-600 text-md'>Tipo de alquiler</label>
          <div className='flex gap-4 relative h-8 border-[3px_solid_#03579A]'>
            <RadioButton
              changed={radioChangeHandler}
              id="1"
              step='0.01'
              isSelected={type === "vivienda"}
              label="Vivienda"
              value="vivienda"
            />
            <RadioButton
              changed={radioChangeHandler}
              id="2"
              isSelected={type === "comercio"}
              label="Comercio"
              value="comercio"
            />
          </div>
        </div>
        <div className="flex gap-1   items-center justify-center mt-4">
          <p className='text-brandBlue text-xl'>$</p>
          <input
            name='alquiler'
            value={values.alquiler}
            onChange={formatNumber}
            placeholder='Monto de alquiler'
            type="text"
            className='w-full max-w-[300px] h-10 rounded-md bg-slate-100 px-2'
          />
        </div>
        <div className="flex gap-1 items-center justify-center mt-4">
          <p className='text-brandBlue text-xl'>$</p>
          <input
            value={values.expensas}
            onChange={formatNumber}
            name='expensas'
            placeholder='Monto de expensas'
            type="text"
            className='w-full max-w-[300px] h-10 rounded-md bg-slate-100 px-2'
          />
        </div>
        <div className="flex flex-wrap gap-3 mt-2 items-center flex-col">
          <p className='text-slate-600'>Duración de alquiler</p>
          <ul className="flex gap-3 flex-wrap justify-center">
            <li className='py-2 px-3 bg-brandBlue text-white rounded-md'>36 Meses</li>
            <li className='py-2 px-3 bg-brandBlue text-white rounded-md'>48 Meses</li>
            <li className='py-2 px-3 bg-brandBlue text-white rounded-md'>60 Meses</li>
          </ul>
        </div>
        <div className=' mt-12'>
          <button className='bg-brandBlue py-2 px-3 text-white rounded-md w-full'>Calcular</button>
        </div>
      </div>
    </form>
  )
}

export default Form