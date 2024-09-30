
import './App.css'
import  {BrowserRouter, Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import HomePage from './Pages/HomePage/HomePage'
import CategoryPage from './Pages/CategoryPage/CatogoryPage'
import ProductsPage from './Pages/ProductsPage/ProductsPage'
import Footer from './components/Footer/footer'
import ProductDetailsPage from './Pages/ProductDetailsPage/ProductDetailsPage'
function App() {
 

  return (
    <>  
    <BrowserRouter>
      <Navbar/>
  
    <Routes>
<Route index element={<HomePage/>}/>
<Route path='/home'   element={<HomePage/>}  />
<Route path='/category' element={<CategoryPage/>}/>
<Route path='/category/:category' element={<CategoryPage />} />
<Route path='/category/:category/product/:id' element={<ProductDetailsPage/>}/>
<Route path='/product/:id' element={<ProductDetailsPage/>}/>
<Route path='/products' element={<ProductsPage/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  
    
   
   
    </>
  )
}

export default App
