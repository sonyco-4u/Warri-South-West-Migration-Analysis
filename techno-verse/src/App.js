import React from 'react';
import './App.css';
import Header from './components/Header';
import Features from './components/Features';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Features />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;