import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

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

export function Nav(){
    return(
        <nav className="navbar" id="navbar" data-aos="fade-down">
            <div className="linkHeaderCouple">
                <Link className="navLink" to="..">
                    <ThemeProvider theme={theme}>
                        <Button className="aboutButtons" variant="contained" href="#outlined-buttons">Home</Button>
                    </ThemeProvider>
                  </Link>
                
                
                <h1 className="navHeader"><strong>Lucas J. Swanson</strong></h1>
                <div></div>
            </div>
            
            <div className="navbar_class">   
                <div className="navbutton"><a href="https://www.github.com/lswans">GitHub</a></div>
                <div className="navbutton"><a href="https://lucasjswanson.weebly.com/">Academic Portfolio</a></div>
                <div className="navbutton"><a href="https://www.linkedin.com/in/lucasjswanson">LinkedIn</a></div>    
            </div>    
            
        </nav>
    )
}