import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    'https://i.pinimg.com/1200x/a0/50/74/a05074a3711578719b47a1028524906d.jpg',
   'https://i.pinimg.com/1200x/a0/50/74/a05074a3711578719b47a1028524906d.jpg'
    // Add more image URLs as needed
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}
      </div>
      <button onClick={prevSlide}>&lt;</button>
      <button onClick={nextSlide}>&gt;</button>
    </div>
  );
};

export default ImageSlider;
