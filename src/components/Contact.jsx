import React from 'react';
import behance from '../assets/VectorB.svg';
import instagram from '../assets/Vector.svg';
import linkedin from '../assets/Vectorl.svg';

const Contact = () => (
  <section className="contact" id="contact"> {/* <-- Add ID here */}
    <div>
      <h4>Let’s work together</h4>
      <div className="social-icons">
        <img src={linkedin} alt="LinkedIn" />
        <img src={instagram} alt="Instagram" />
        <img src={behance} alt="Behance" />
      </div>
    </div>
    <form>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <textarea rows="5" placeholder="Type your message here"></textarea>
      <button type="submit">Submit</button>
    </form>
  </section>
);

export default Contact;
