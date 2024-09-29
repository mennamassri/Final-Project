import { useState, useEffect } from 'react';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from 'react-router-dom';
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
        console.log(productData);
        
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
      
          <Skeleton height={38} width={315} />
        
       
          <Skeleton height={38} width={315} />
     
      
          <Skeleton height={38} width={315} />
    
    
          <Skeleton height={38} width={315} />
    
        </div>
      </>
    );
  };

  return (
    <div className="categories-container" style={{paddingTop:"0"}}>
     {loading ? (
        <Loadingcase /> 
      ) : (
    categories.map((category, index) => (
      <Link to={`/category/${category}`} key={index} style={{ width: "100%", marginBottom: "10px" }}>
      <button className="btn btn-outline-danger" style={{ width: "100%" }}>
        {category}
      </button>
    </Link>
          ))
        )}
    </div>
  );
}

export default Categories;
