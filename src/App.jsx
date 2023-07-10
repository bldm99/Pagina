import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'

import { Navigate } from 'react-router-dom'

import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'

import Ecomerce from './componentes/ecomerce/Ecomerce'
import Emenu from './componentes/ecomerce/Emenu'
import Compra from './componentes/ecomerce/Compra/Compra'

import Eregister from './componentes/ecomerce/Compra/Eregister'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
       

        
        

        <Route path="/" element={<Eregister />} />
        <Route path="/paginaexplorer/" element={<><Ecomerce /></>} />
        <Route path='/paginaexplorer/:id' element={<> <Emenu /> <Compra /> </>} />

       

        
      </Routes>
    </BrowserRouter>
  )
}

export default App
