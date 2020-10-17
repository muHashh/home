import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function App() {

  document.title = "Homepage";

  return (
    <div>
      <header className="App-header">
        <Navbar/>
      </header>

      <div className="bgstyle">
        <div
          className="title jumbotron jumbotron-fluid bg-transparent text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
        >
          <div className="container container-fluid text-center ">
            
            <h1 className="display-1 pb-4">
              Hassan Shahid
            </h1>
            
            <p className="pb-5">
              Computer Science and Physics student at the University of Glasgow
            </p>

            <a href="https://github.com/muhashh" className="fa-link">
              <FontAwesomeIcon icon={faGithub} size="3x"/> 
            </a>

            <a href="https://www.linkedin.com/in/hassan-shahid0/" className="fa-link">
              <FontAwesomeIcon icon={faLinkedin} size="3x"/> 
            </a>
          </div>

        </div>
      </div>

      <Projects/>

      <Footer/>
      
    </div>
  );
}

export default App;
