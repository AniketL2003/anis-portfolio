import React from 'react';
import hr360 from '../assets/Ingate.png';
import Resolveit from '../assets/Resolveit.png';
import Retroring from '../assets/Retroring.jpg';
import Crm from '../assets/Crm.png';
import Estate from '../assets/Estate.png';
import imageHr from '../assets/imageHr.png';

const Projects = () => (
  <section className="projects">
    <h3>My latest work</h3>
    <div className="project-grid">
      <div className="project-card" style={{ background: '#DDEFFF' }}>
        <h4>HR360</h4>
        <p>HR360 is a modern social media app that fosters meaningful connections through seamless content.</p>
        <p><strong>Read case study →</strong></p>
        <img src={imageHr} alt="Hr360"/>
      </div>
      <div className="project-card" style={{ background: '#E7EDFF' }}>
        <h4>Real Estate Investment</h4>
        <p>Invest is a modern social media app that fosters meaningful connections through seamless content.</p>
        <p><strong>Read case study →</strong></p>
        <img src={Estate} alt="Real Estate Invest"/>
      </div>
       <div className="project-card" style={{ background: '#D9F5F0' }}>
        <h4>CRM</h4>
        <p>CRM is a modern social media app that fosters meaningful connections through seamless content.</p>
        <p><strong>Read case study →</strong></p>
        <img src={Crm} alt="CRM" />
      </div>
       <div className="project-card" style={{ background: '#E4DBEA' }}>
        <h4>InGate</h4>
        <p>InGate is a modern social media app that fosters meaningful connections through seamless content.</p>
        <p><strong>Read case study →</strong></p>
        <img src={hr360} alt="InGate" />
      </div>
      <div className="project-card" style={{ background: '#FEE9E3' }}>
        <h4>RetroRing</h4>
        <p>RetroRing is a modern social media app that fosters meaningful connections through seamless content.</p>
        <p><strong>Read case study →</strong></p>
        <img src={Retroring} alt="RetroRing" />
      </div>
      <div className="project-card" style={{ background: '#FAF6C8' }}>
        <h4>ResolveIT</h4>
        <p>ResolveIT is a modern social media app that fosters meaningful connections through seamless content.</p>
        <p><strong>Read case study →</strong></p>
        <img src={Resolveit} alt="Resolveit"/>
      </div>
      
    </div>
  </section>
);

export default Projects;
