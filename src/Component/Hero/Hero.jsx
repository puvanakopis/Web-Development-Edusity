import React from 'react';
import './Hero.css';
import arrow from '../../assets/dark-arrow.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-text'>
        <h1>We Ensure Better Education for a Better World</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with 
          the knowledge, skills, and experiences needed to excel in the 
          dynamic field of education.
        </p>
        <button className='btn'>
          Explore more <img src={arrow} alt="Arrow Icon" />
        </button>
      </div>
    </div>
  );
}

export default Hero;
