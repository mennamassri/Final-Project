
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useParams } from 'react-router-dom';
import './Product.css'
import LocationOnIcon from "@mui/icons-material/LocationOn";
 function ProductPage() {
    const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams(); 

   
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);

        const productData = response.data;
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false); 
      }}
      if (id) {
        fetchProduct(); 
      }
  

    }, [id]); 


  return (
    <>
  <div className="Container d-flex flex-row mx-0 my-5 gap-4">
      <div className="col-1 d-flex flex-column  gap-1 p-4 justify-content-center ">
      
        <img className='slide' src={product.image} alt=""  />
        <img className='slide' src={product.image} alt=""  />
        <img className='slide' src={product.image} alt=""  />
        <img className='slide' src={product.image} alt=""  />
        <img className='slide' src={product.image} alt=""  />
      </div>

      <div className="col-3 main-image-container d-flex img-fulid justify-content-center align-items-center">
        <img className='main-image  ' src={product.image} alt={product.title} />
      </div>

      <div className="col-5 m-2">
        <h1>{product.title}</h1>
        <p className='price '>${product.price}</p>
        <p>Available at a lower price from other sellers that may not offer free Prime shipping.
Brand	Christopher Knight Home</p>
<hr/>
<table  >
  <tr>
    <td>Brand</td>
    <td>Christopher Knight Home</td>
  </tr>
  <tr>
    <td>Color</td>
    <td>Ivory/Walnut</td>
  </tr>
  <tr>
    <td>Dimensions</td>
    <td>28.5 D x 26.3 W x 31.75 H</td>
  </tr>
  <tr>
    <td>Size</td>
    <td>28.5 D x 26.3 W x 31.75 H</td>
  </tr>
  <tr>
    <td>Special Feature</td>
    <td>Arm Rest</td>
  </tr>
</table>
<hr/>
<h4>About this item</h4>
<p>{product.description}</p>

      </div>
  <div className="col-2">
  <div className="card">
  <div className="card-body">
 <h3>${product.price}</h3>
 <p className='small'>$485.46 Shipping & Import Charges to Palestinian</p>
 <p className='small'>$365.32 delivery</p>
 <p className=" smaller"><LocationOnIcon style={{fontSize:"small"}} />Deliver to Palestinian Territories</p>
<p>In Stock</p> 
<select className="form-select p-2 " aria-label="Default select example">
  <option selected>Quantity : 1</option>
  <option value="1">2</option>
  <option value="2">3</option>
  <option value="3">4</option>
</select>
<button href="#" className="btn btn-warning button my-2">Add to Cart</button>
<button href="#" className="btn orange button my-2">Buy Now</button>
<table className='smaller'>
  <tr>
    <td>Ships from</td>
    <td>Amazon.com</td>
  </tr>
  <tr>
    <td>Sold by</td> 
    <td>Amazon.com</td>
  </tr>
  <tr>
    <td>Returns</td>
    <td>30-day refund/replacement</td>
  </tr>
  <tr>
    <td>Payment</td>
    <td>Secure transaction</td>
  </tr>
</table>

  </div>
</div>
  </div>
    </div>
    </>
  )
}
export default ProductPage;