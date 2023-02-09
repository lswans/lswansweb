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
import {About} from './About';
import {Nav} from './Nav';
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
        <Nav/>
        <About/>
        <CardPage group1={group1} group2={group2} group3={group3}/>
        <Toolbox/>
        <footer>
            Designed and produced entirely by <strong>&copy; Lucas Swanson, 2022</strong>
        </footer>

    </div>

  );
}

export default App;
