
import './App.css'
import  {BrowserRouter, Routes , Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import HomePage from './Pages/HomePage/HomePage'
import CategoryPage from './Pages/CategoryPage/CatogoryPage'
import Product from './Pages/ProductPage/ProductPage'
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
<Route path='/category/:category/product/:id' element={<Product/>}/>
    </Routes>
    </BrowserRouter>
  
    
   
   
    </>
  )
}

export default App
