import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimilarCard from "../common/similar-product";
import recent1 from '../../assets/recent1.png';
import recent2 from '../../assets/recent2.png';
import recent3 from '../../assets/recent3.png';
import recent4 from '../../assets/recent4.png';
import recent5 from '../../assets/recent5.png';
import recent6 from '../../assets/recent6.png';


const recentProducts = [
  { id: 1, name: "Jacket", price: "$19.99", imageURL: recent1 },
  { id: 2, name: "Comb", price: "$29.99", imageURL: recent2 },
  { id: 3, name: "Watch", price: "$39.99", imageURL: recent3 },
  { id: 4, name: "Sneaker", price: "$49.99", imageURL: recent4 },
  { id: 5, name: "Wallets", price: "$39.99", imageURL: recent5 },
  { id: 6, name: "Shoes", price: "$49.99", imageURL: recent6 },
];

export const CardSlider = ({ products }) => {
  const settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
  };

  console.log({ products });

  return (
    <div className="content">
      <div className="container">
        <Slider {...settings}>
          {recentProducts.map((product) => (
            <div key={product.id} className="carousel-item">
              <SimilarCard product={product} productHeight={"400px"}/>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
