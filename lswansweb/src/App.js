import logo from './logo.svg';
import './style.css';
import './portrait_lswans.jpeg';
import {Img} from 'react'
import portrait_lswans from './portrait_lswans.jpeg';
import {CardPage} from './CardPage';

export function App() {

  return(
<div className="container">
    
    <nav className="navbar">
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
        <div>
            <img src={portrait_lswans} style={{ width: 300, height: 300}} alt="me"/>
            <h4>Web Interface Developer @ University of Washington Department of Earth and Space Sciences</h4>
        </div>
        
        <div className="about_text">
            <h2>About Me</h2>
            <p>I am a senior at the University of Washington, graduating with a <strong>B.S Earth and Space Sciences and Informatics</strong> in the Spring of 2023. In the <a href="https://denolle-lab.github.io/">Denolle Quake Lab</a>, I am developing a web-hosted interface connected with the UW SERMEQ servers to allow streamlined, public access to 50TB+ of seismic DAS (Digital Acoustic Sensing) measurements from Washington, Canada and Alaska.</p>
            <p>Upon graduation, I am interested in working with satellite imagery to observe natural phenomena, measuring useful data and packaging that data for consumer use. Applications that come to mind include satellite imagery for earth observation, cell network development, aerospace data engineering, etc.</p>
        </div>
    </div>
    <h2 id="projects">My Projects</h2>
    <CardPage/>
</body>




  <footer>
      &copy; Lucas Swanson, 2022
  </footer>

</div>

  );
}

export default App;
