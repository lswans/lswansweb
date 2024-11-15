import portrait_lswans from './portrait_lswans.jpeg';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './style.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';

export function About(){
    const theme = createTheme({
        status: {
          danger: '#e53e3e',
        },
        palette: {
          primary: {
            main: '#daa520'
          }, neutral: {
            main: '#64748B',
            contrastText: '#fff',
          },
        },
      });
    return(
    <div>
        <div className="about">
            <div className="about_image" data-aos="fade-right">
                <img className="portrait-main" src={portrait_lswans} style={{ width: 300, height: 300}} alt="me"/>
                <h4>Satellite Manufacturing Analyst @ Accenture</h4>
            </div>
            
            <div className="about_text" data-aos="fade-left" data-aos-duration = {1000}>
                <h2>About Me</h2>
                <p>I am a University of Washington graduate with Bachelor of Science (B.S.) degrees in <strong>Earth and Space Sciences and Informatics</strong>. At <a href="https://www.accenture.com/us-en">Accenture</a>, I provide MES administration support to satellite manufacturing engineers, conduct user acceptance testing for new software features, and triage bug fixes.  </p>
                <p>I am seeking professional opportunities in Software Development, particularly in Earth Observation and Data Visualization. I specialize in frontend development, data viz, and product design and have foundational knowledge in climate science, satellite systems and software development methodologies. Outside of the office I'm a mountain climber (Mount Rainier Summit 2022), a line dancer, a musician and a board game enthusiast.</p>
            </div>
            
        </div>
        <div className="aboutButtons">
            <Link to="cardpage"> 
                <ThemeProvider theme={theme}>
                <Button variant="outlined" href="#outlined-buttons">My Projects</Button>
                </ThemeProvider>
            </Link>
            <Link to="toolbox">
                <ThemeProvider theme={theme}>
                <Button variant="outlined" href="#outlined-buttons">My Toolbox</Button>
                </ThemeProvider>
            </Link>
        </div>
    </div>
)
}