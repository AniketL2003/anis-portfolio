import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Divider from './components/AutoScrollDivider';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import './style.css';
import './components/AutoScrollDivider.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutSection from './components/AboutSection'; // Your About page

const HomePage = () => (
  <>
    <Header />
    <Hero />
    <Divider />
    <Projects />
    <Contact />
    <Footer />
  </>
);

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutSection />} />
    </Routes>
  </Router>
);

export default App;
