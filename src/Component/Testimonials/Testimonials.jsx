import React, { useRef } from 'react';
import './Testimonials.css';
import back_icon from '../../assets/back-icon.png';
import next_icon from '../../assets/next-icon.png';
import user1 from '../../assets/user-1.png';
import user2 from '../../assets/user-2.png';
import user3 from '../../assets/user-3.png';
import user4 from '../../assets/user-4.png';

const Testimonials = () => {

  // Ref to save the slider
  const slider = useRef(null);
  let tx = 0;

  // Function to slide forward
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`; 
  };

   // Function to slide Backward
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className='testimonials'>

      {/* Navigation buttons */}
      <img src={next_icon} alt="next-btn" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="back-btn" className='back-btn' onClick={slideBackward} />
      
      
       {/* Slider container */}
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className='slide'>
              <div className="user-info">
                <img src={user1} alt="" />
                <div>
                  <h3>Emily Williams</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className="user-info">
                <img src={user2} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className="user-info">
                <img src={user3} alt="" />
                <div>
                  <h3>Emily Williams</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className="user-info">
                <img src={user4} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
