
import { Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ProductList from './ProductList'
import ProductDetail from './ProductDetail'

function App() {

  return (
    <>

    <Navbar></Navbar>

<Routes>
  <Route index element={<ProductList/>}></Route>
  <Route path="/ProductDetail/:id" element={<ProductDetail/>}></Route>
  <Route></Route>
</Routes>
    <Footer></Footer>
   
    </>
  )
}

export default App
