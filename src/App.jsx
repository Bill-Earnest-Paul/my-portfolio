import {React,useEffect} from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';

import Footer from './components/Footer.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  useEffect(()=>{
    AOS.init({
      duration:900,
    })
  },[])
  return (
    <>
      <main className='bg-gray-950'>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Footer/>
      </main>
    </>
  )
}

export default App
