import React from 'react';
import circle1 from '../assets/Circle1.png';


const Hero = () => (
  <section className="hero">
    <div className="hero-text">
      <p>UX/UI | Product Design</p>
      <h2>HEY! I’m Aniket, Based In Oxford Of The East</h2>
      <p>Helping tech startups passionately for reshaping their brands, user experiences, and app/website designs.</p>
    </div>
    <div className="hero-imgs">
      <img src={circle1} alt="circle1" />
    
  
    </div>
  </section>
);

export default Hero;
