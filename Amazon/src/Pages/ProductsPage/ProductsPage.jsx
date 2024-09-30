import React from 'react';
import './ProductsPage.css';
import { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://fakestoreapi.com/products');
        const productsData = response.data;
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching Products:", error);
      } finally {
        setLoading(false);
      }
    };

  
    fetchProducts();
  }, []);

  return (
    <>
      <div className="navBar d-flex justify-content-end">
        <div>
          <select className="form-select">
            <option value="featured">Sort By: featured</option>
            <option value="Price: Low to High">Price: Low to High</option>
            <option value="Price: High to Low">Price: High to Low</option>
            <option value="Avg. Customer Review">Avg. Customer Review</option>
            <option value="Best sellers">Best sellers</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="col-12 d-flex flex-wrap justify-content-center gap-2 my-4">
          {[...Array(10)].map((_, index) => (
            <Skeleton key={index} width={256} height={350} />
          ))}
        </div>
      ) : (
        <div className="col-12 d-flex flex-wrap justify-content-center gap-2 my-4">
          {products.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
            >
              <div className="card pCard d-flex flex-column justify-content-between">
                <img
                  src={product.image}
                  className="card-img-top-product"
                  alt={product.title}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">
                    {product.description.substring(0, 30)}...
                  </p>
                  <p>
                    FREE delivery to Palestinian Territories. Only 7 left in stock - order soon.
                  </p>
                  <div className="mt-auto d-flex flex-column">
                    <div className="d-flex flex-row">
                      <p className="mb-2 fs-3">${product.price}</p>
                      <p className="mx-2 line">
                        list: ${parseFloat((product.price + 10).toFixed(2))}
                      </p>
                    </div>
                    <button href="#" className="btn btn-warning addToCard">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
