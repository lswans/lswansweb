import React, {useState} from 'react';
import {SearchBar} from './SearchBar';
import {CardPage} from './CardPage';
import clarityApiScreenshot from "./clarityapi-screenshot.png";
import vesperScreenshot from "./project-vesper-logo.png";
import posterScreenshot from "./poster-screenshot.png";
import anemoneScreenshot from './anemone-screenshot.png'
import { FeatureCard } from './FeatureCard';
import { AcademicPortfolio } from './AcademicPortfolio';
import {Toolbox} from './toolbox'


export function PageController(){

    let quakeLabCard = {
            "skills":"Javascript React GitHub ArcGIS",
            "card":(
                <div className="project_card" data-aos="fade-up">
                    <a href="https://github.com/Project-Anemone" className="card_button"><h3>Starfish Space: Data Viz Tool for Satellite Data Analysis</h3>
                            <p>Building an interface for Starfish Space to analyze satellite telemetry and flight metrics using JavaScript (React.js, Plotly.js). Using Azure Cosmos to create a PostgreSQL backend structure. So far I have personally initiated the project, developed the Page Of Plots, and assisted with Figma designs and user interviews.</p>
                            
                        </a>
                        <img className="cardImage" src={anemoneScreenshot}/>
                </div>
            ),
            "id":0
        }
        
    let clarityAPICard = {
        "skills":"JavaScript, JSX, React, GitHub",
        "card":(
            <div className="project_card" data-aos="fade-up"><a href="https://clarityapi-6a71a.web.app/" className="card_button"><h3>ClarityAPI: Air Quality Web App</h3>
                <p>An air quality visualisation app that provides health recommendations based on your area's air quality readings. I personally implemented the search elements (searchbars + drop-downs) as well as the page that displays city cards, and assisted with styling for entire app.</p></a>
                <img className="cardImage" src={clarityApiScreenshot}/> 
            </div>
        ),
        "id":1
    }
    let vesperCard = {
        "skills":"SOLIDWORKS (CAD), Aerospace Mission Operations, Technical Writing",
        "card":(
            <div className="project_card" data-aos="fade-up"><a href="https://lucasjswanson.weebly.com/nasa-rasc-al.html" className="card_button"><h3>Project VESPER: NASA RASC-AL Proposal</h3>
                <p>A proposal detailing a manned flyby mission of Venus to collect evidence of liquid water's past or present existence on the surface.</p>
                </a>
                <img className="cardImage" src={vesperScreenshot}/> 
                
            </div>
        ),
        "id":2
    }
    let lspaceCard = {
        "skills":"Project Management, Leadership, Gantt Charts, Communication",
        "card":(
            <div className="project_card" data-aos="fade-up"><a href="https://lucasjswanson.weebly.com/project-glacier.html" className="card_button"><h3>Project GLACIER: NASA L'SPACE Mission Concept Academy Deliverable</h3>
                <p>Geological Lunar Analysis of Crater-Ice for the Extraciton of Resources (GLACIER). A PDR (Preliminary Design Review) submission detailing a combined satellite and lander mission to quantify ice volume in the polar regions of the Moon.</p></a>
            
            </div>
        ),
        "id":3
    }
    let spaceGrantCard = {
        "skills":"Python, Data Science, Satellite Imagery, Machine Learning",
        "card":(
            <div className="project_card" data-aos="fade-up"><a href="https://lucasjswanson.weebly.com/space-grant-research.html" className="card_button"><h3>NASA Space Grant; Quantifying Climate Change</h3>
                <p>A research project querying and visualizing 15+ years of NASA's sea surface temperature (SST) data on the Kuroshio Current of the Pacific.</p></a>
                <img className="cardImage" id="spaceGrantImage" src={posterScreenshot}/> 
            </div>
        ),
        "id":4
    }
    let fieldCampCard = {
        "skills":"ArcGIS Pro, Geochemistry, Microsoft Office",
        "card":(
            <div className="project_card" data-aos="fade-up">
                <a href="https://lucasjswanson.weebly.com/ess-401.html" className="card_button"><h3>ESS 401: Geology Field Camp w/ ArcGIS</h3>
                <p>A six-week full-time course focused on building relevant career skills for aspiring geologists including GIS, field skills and documentation.</p></a>
            </div>
        ),
        "id":5
    }
    let castleGenCard = {
        "skills":"React, Node.js, Express.js, full-stack development",
        "card":(
            <div className="project_card" data-aos="fade-up">
                <a href="https://github.com/lswans/castlegen" className="card_button"><h3>ESS 401: Geology Field Camp w/ ArcGIS</h3>
                <p>A six-week full-time course focused on building relevant career skills for aspiring geologists including GIS, field skills and documentation.</p></a>
            </div>
        ),
        "id":6
    }
    //filter projects to return
    let allCards = [quakeLabCard, clarityAPICard, vesperCard, lspaceCard, spaceGrantCard, fieldCampCard];
    let displayedCards = allCards.map(cardobj =>{
       return cardobj;
    })


    
    return displayedCards;
}