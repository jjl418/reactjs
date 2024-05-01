import React from 'react';
import './Banner.css'; // Import CSS for styling
import tempBanner from '../../../images/home/banner.jpg';

function Banner() {
  return (
    <div className="hero-banner">
      <img src={tempBanner} alt="Hero Image" className="hero-image" />
      
    </div>
  );
}

export default Banner;