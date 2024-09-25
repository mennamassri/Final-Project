import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slide1 from '../../assets/SlideImg/Slide1.jpg';
import Slide2 from '../../assets/SlideImg/Slide2.jpg';
import Slide3 from '../../assets/SlideImg/Slide3.jpg';
import Slide4 from '../../assets/SlideImg/Slide4.jpg';
import Slide5 from '../../assets/SlideImg/Slide5.jpg';
import Slide6 from '../../assets/SlideImg/Slide6.jpg';
import './HomePage.css';
import Categories from '../../components/Categories/Categories';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
    <div className="carousel-container">
   
      <Carousel className="carousel-background" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img src={Slide1} alt=""  />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Slide2} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Slide3} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Slide4} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Slide5} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Slide6} alt="" />
        </Carousel.Item>
      </Carousel>

   
      <div className="categories">
        <Categories />
      </div>
    </div>
  
    </>
  );
}

export default ControlledCarousel;
