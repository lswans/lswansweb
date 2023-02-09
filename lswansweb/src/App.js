import logo from './logo.svg';
import './style.css';
import './portrait_lswans.jpeg';
import {Img, useState} from 'react'
import portrait_lswans from './portrait_lswans.jpeg';
import {PageController} from './PageController';
import {CardPage} from './CardPage';
import{Toolbox} from './toolbox';
import AOS from 'aos';
import Map from './Map'
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
// ..
AOS.init();

AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 700, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
  
  window.onbeforeunload = () => {  
    window.scrollTo(0, 0);  
  };


let displayedCards = PageController();
let group1 = displayedCards.slice(0, 2);
let group2 = displayedCards.slice(2, 4);
let group3 = displayedCards.slice(4, 6);

function App() {

  return(
    <div>
        <head>
            <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        </head>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
            <nav className="navbar" id="navbar" data-aos="fade-down">
                <div>
                    <h1><strong>Lucas J. Swanson</strong></h1>
                </div>
                
                <div className="navbar_class">
                    
                    <div className="navbutton"><a href="https://www.github.com/lswans">GitHub</a></div>
                    <div className="navbutton"><a href="https://www.linkedin.com/in/lucasjswanson">LinkedIn</a></div>
                    <div className="navbutton"><a href="https://lucasjswanson.weebly.com">Academic Portfolio</a></div>
                    
                </div>    
            </nav>

        <body>
            <div className="about">
                <div data-aos="fade-right">
                    <img src={portrait_lswans} style={{ width: 300, height: 300}} alt="me"/>
                    <h4>Student Satellite Data Engineer @ Starfish Space</h4>
                </div>
                
                <div className="about_text" data-aos="fade-left" data-aos-duration = {1000}>
                    <h2>About Me</h2>
                    <p>I am a senior at the University of Washington, graduating with a <strong>B.S Earth and Space Sciences and Informatics</strong> in the Spring of 2023. At <a href="https://www.starfishspace.com/">Starfish Space</a>, I am working with a team of five total graduating seniors to develop a visualization tool for satellite flight metrics (velocity, attitude, battery usage, etc.).</p>
                    <p>Upon graduation, I am interested in working with satellite imagery to observe natural phenomena, measuring useful data and packaging that data for consumer use. Applications that come to mind include satellite imagery for earth observation, cell network development, aerospace data engineering, etc.</p>
                </div>
            </div>
            <h2 id="projects" data-aos="fade-up">My Projects</h2>
            <CardPage group1={group1} group2={group2} group3={group3}/>
            <Toolbox/>
            <div className="viewDiv">
                <Map/>
            </div>
            
        </body>

        <footer>
            Designed and produced entirely by <strong>&copy; Lucas Swanson, 2022</strong>
        </footer>

    </div>

  );
}

export default App;
