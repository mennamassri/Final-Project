import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import './Categories.css'; 

function Categories() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        const uniqueCategories = [...new Set(data.map((product) => product.category))];
        setCategories(uniqueCategories);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="categories-container ">
      {categories.map((category, index) => (
        <div key={index} className="category-section  p-4 ">
         <h2 className='p-1 mx-3 '>{category}</h2>
          <div className="products-grid  d-flex flex-wrap ">
          
            {products
              .filter((product) => product.category === category)
              .slice(0, 4) 
              .map((product, index) => (
                <Card key={index} className="product-card ">
              
                  <Card.Img variant="top" src={product.image} className="product-image" />
                  <Card.Body>
                   
                  </Card.Body>
                </Card>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Categories;
