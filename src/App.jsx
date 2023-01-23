import './App.css'
import logo from './assets/logo.svg'
import Form from './Form'

function App() {

  return (
    <div className='to-brandBlue from-cyan-500 bg-gradient-to-r min-h-screen grid grid-rows-[70px_auto_80px]'>
      <header>
        <div className="h-full grid place-content-center">
          <img src={logo} alt="" />
        </div>
      </header>
      <div>
        <h1 className='text-white font-bold my-6 text-2xl text-center text-gray-800'>Calculador de garantía</h1>
        <div className='p-2'>
          <Form />
        </div>
        <p className='text-xs text-white text-center w-full px-2 max-w-md mt-2 mx-auto'>El resultado que surja del presente simulador es meramente referencial, no reviste carácter contractual ni constituye una oferta o aceptación de la solicitud que presente el cliente.El valor arrojado corresponde al método de pago anual.</p>
      </div>
      <footer className=''>
        <div className="h-full grid place-content-center">
          <p className="text-slate-300 font-bold">
            Juan Sebastian Espinola
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
