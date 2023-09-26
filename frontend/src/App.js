import 'tailwindcss/tailwind.css'; 
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
