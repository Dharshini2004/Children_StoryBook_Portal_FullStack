import Carousel from 'react-bootstrap/Carousel';
import logo from '../assets/logo.jpeg';
import book1 from "../assets/book1.jpg"
import React, { Component } from 'react';
import bookItems from './BookItem';
import "../assets/styles/Carouselcomp.css";
import { Link, useNavigate } from 'react-router-dom';

const imagesPerSlide = 4; // Number of images per slide

const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const Carousalcomp = () => {
  const slides = chunkArray(bookItems, imagesPerSlide);
  const navigate=useNavigate();
  return (
    <>
    <Carousel>
      {slides.map((slide, index) => (
        <Carousel.Item key={index} interval={3000}
        >
          <div className="carousel-slide">
            {slide.map(item => (
              <div className="carousel-item-content" key={item.id}
              >
                <img
                  className="d-block w-100"
                  src={item.img}
                  alt={item.title}
                  maxwidth="300"
                  maxheight="300"
                  // onClick={() => {
                  //   navigate("/login");
                  // }}
                />
                {/* <p>{item.title}</p>
                <p>${item.price}</p> */}

              </div>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>

    {/* <Carousel>
      <Carousel.Item interval={1000}>
        <img src={logo} alt="Toys" width="500" height="500"/>
        <img src={logo} alt="Toys" width="500" height="500"/>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src={book1} alt="Toys" width="500" height="500"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={logo} alt="Toys" width="500" height="500"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}
    </>
  
  );
}

export default Carousalcomp;