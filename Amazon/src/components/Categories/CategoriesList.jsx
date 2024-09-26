import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import './Categories.css'; 
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Categories() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); 
        const response = await axios.get('https://fakestoreapi.com/products');
        const productData = response.data;
        setProducts(productData);
        
     
        const uniqueCategories = [...new Set(productData.map((product) => product.category))];
        setCategories(uniqueCategories);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false); 
      }
    };

    fetchData();
  }, []); 

  const Loadingcase = () => {
    return (
      <>
      <div className=' d-flex flex-row flex-wrap gap-3'>
      
          <Skeleton height={256} width={250} />
        
       
          <Skeleton height={256} width={250} />
     
      
          <Skeleton height={256} width={250} />
    
    
          <Skeleton height={256} width={250} />
    
        </div>
      </>
    );
  };

  return (
    <div className="categories-container">
    
    {categories.map((category, index) => (
            <button className='btn btn-outline-danger'  key={index}
              style={{ marginBottom: '10px', width: '100%' }}
             
            >
              {category}
            </button>
          ))}
    </div>
  );
}

export default Categories;
