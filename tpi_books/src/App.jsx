import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from'./Components/Home'
import CategoriaDetalle from './Pages/CategoriaDetalle'
import ProductoDetalle from './Pages/ProductoDetalle'

function App() {
  
  return (
    <>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/categoriaDetalle/:categoria_id' element={<CategoriaDetalle/>}/>
          <Route path='/productoDetalle/:id'element={<ProductoDetalle/>}/>
        </Routes>
    </>
  )
}

export default App
