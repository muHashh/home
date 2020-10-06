import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bgstyle">
      <header className="App-header">
        <Navbar/>
      </header>

      <Footer/>
    </div>
  );
}

export default App;
