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
        console.log(productData);
        
     
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
      <div className=' d-flex flex-row flex-wrap gap-3 justify-content-center'>
      
          <Skeleton  height={256} width={250} />
        
       
          <Skeleton height={256} width={250} />
     
      
          <Skeleton height={256} width={250} />
    
    
          <Skeleton height={256} width={250} />
    
        </div>
      </>
    );
  };

  return (
    <div className="categories-container">
      {loading ? (
        <Loadingcase /> 
      ) : (
        categories.map((category, index) => (
          <div key={index} className="category-section p-4">
            <h2 className="p-1 mx-3">{category}</h2>
            <div className="products-grid d-flex flex-wrap">
              {products
                .filter((product) => product.category === category)
                .slice(0, 4) 
                .map((product, index) => (
                  <Card key={index} className="product-card">
                    <Card.Img variant="top" src={product.image} className="product-image" />
                  </Card>
                ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Categories;
