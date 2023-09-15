import React, {useState} from 'react';
import reactLogo from './react.png';
import firebaseLogo from './firebase.png';
import d3Logo from './d3.png';
import pythonLogo from './python.png';
import arcgisLogo from './ArcGIS_pro.png';
import jupyterLogo from './jupyter.png';
import sqlLogo from './sql.png';
import javaLogo from './java.png';
import gitLogo from './git.png';
import tableauLogo from './tableau.png';
import gitbashLogo from './gitbasgh.png';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import geopandasLogo from './geopandas_icon.png';
import gdalLogo from './GDAL Logo.png';
import dockerlogo from './dockerlogo.png';
import kuberneteslogo from './kubernetes.png';
import awsLogo from './awsLogo.png';

export function Toolbox(){
    return(
        <div>
            <div className="toolbox_text_container" data-aos="fade-left" data-aos-duration = {1000}>
                <div className="toolbox_text" >
                    <h2>My Toolbox</h2>
                    <p>These are the various tools that I've worked with over the years and feel comfortable using in at least one major applicaiton. I primarily develop front-end interfaces in <strong>JavaScript (React.js)</strong>, but will adjust to the most appropriate tool for the task. In terms of Python scripting, I work with the following libraries: pandas, geopandas, requests, scikit-learn, numpy, and matplotlib. For GIS development I use ArcGIS and it's respective API to develop map-dependent products, but am currently learning to use QGIS.</p>
                </div>
            </div>
            <div className = "toolkit_container" data-aos="fade-up">
                <img className="toolkit" title="React - Javascript Library" src={reactLogo} width={100} height={100}/>
                <img className="toolkit" title="Firebase - Google Cloud Platform"src={firebaseLogo} width={100} height={100}/>
                <img className="toolkit" title="D3.js - Data Driven Documents" src={d3Logo} width={100} height={100}/>
                <img className="toolkit" title ="Python - Plotly, Pandas, Geopandas, Requests" src={pythonLogo} width={100} height={100}/>
                <img className="toolkit" title = "ArcGIS Pro - 3.0.1" src={arcgisLogo} width={100} height={100}/>
                <img className="toolkit" title = "Jupyter Notebook - Online Python Environment" src={jupyterLogo} width={100} height={100}/>
                <img className="toolkit" title = "SQL - Azure Data Studio" src={sqlLogo} width={100} height={100}/>
                <img className="toolkit" title = "Java - Object-Oriented Programming" src={javaLogo} width={100} height={100}/>
                <img className="toolkit" title = "GitHub - Version Control (Web)" src={gitLogo} width={100} height={100}/>
                <img className="toolkit" title = "Git Bash - Verison Control (Local)" src={gitbashLogo} width={100} height={100}/>
                <img className="toolkit" title = "GeoPandas - coordinate mapping Python library" src={geopandasLogo} width={100} height={100}/>
                <img className="toolkit" title = "Geospatial Data Abstraction Library (GDAL)" src={gdalLogo} width={100} height={100}/>
                <img className="toolkit" title = "Docker (Containerization)" src={dockerlogo} width={100} height={100}/>
                <img className="toolkit" title = "Kubernetes (Containerization)" src={kuberneteslogo} width={100} height={100}/>
                <img className="toolkit" title = "Amazon Web Services (AWS EC2, IAM)" src={awsLogo} width={100} height={100}/>
            </div>
                  
        </div>

    )
}