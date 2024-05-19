import React, { useEffect } from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills.';
import { Projects } from './components/Projects';
import { AboutMe } from './components/AboutMe';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  useEffect(() => {
    document.title = "Diego Chruscinski de Souza";
  }, []);

  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <AboutMe/>
      <Footer/>
      
    </div>
  );
}

export default App;
