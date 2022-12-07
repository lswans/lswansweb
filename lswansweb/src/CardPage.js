
import { React, useState } from "react";
import {SearchBar} from "./SearchBar";

export function CardPage(){
    const [inputValue, setInputValue] = useState('')//initialize as empty string

    //Declare project cards
    let quakeLabCard = ["skills", "card"];
    quakeLabCard["skills"] = "Javascript React GitHub ArcGIS";
    console.log(quakeLabCard["skills"]);
    quakeLabCard["card"] = (
        <div className="project_card">
            <a href="https://www.github.com/lswans" className="card_button"><h3>Denolle Quake Lab; Web Interface for Earthquake Data</h3>
                    <p>Currently building an online interface with the UW Department of Earth and Space Science's seismic data server to allow public access to 50TB+ of earthquake measurements. </p>
                    
                </a>
        </div>
    )


    let clarityAPICard = ["skills", "card"]
    clarityAPICard["skills"] = "JavaScript, JSX, React, GitHub";
    clarityAPICard["card"] = (
        <div className="project_card"><a href="https://www.github.com/lswans" className="card_button"><h3>ClarityAPI: Air Quality Web App</h3>
            <p>An air quality visualisation app that provides health recommendations based on your area's air quality readings.</p></a>
            
        </div>
    )
    
    let vesperCard = ["skills", "card"]
    vesperCard["skills"] = "SOLIDWORKS (CAD), Aerospace Mission Operations, Technical Writing"
    vesperCard["card"]=(
        <div className="project_card"><a href="https://lucasjswanson.weebly.com/nasa-rasc-al.html" className="card_button"><h3>Project VESPER: NASA RASC-AL Proposal</h3>
            <p>A proposal detailing a manned flyby mission of Venus to collect evidence of liquid water's past or present existence on the surface.</p>
            </a>
            
        </div>
    )

    let lspaceCard = ["skills", "card"]
    lspaceCard["skills"] = "Project Management, Leadership, Gantt Charts, Communication"
    lspaceCard["card"]=(
        <div className="project_card"><a href="https://lucasjswanson.weebly.com/project-glacier.html" className="card_button"><h3>Project GLACIER: NASA L'SPACE Mission Concept Academy Deliverable</h3>
            <p>Geological Lunar Analysis of Crater-Ice for the Extraciton of Resources (GLACIER). A PDR (Preliminary Design Review) submission detailing a combined satellite and lander mission to quantify ice volume in the polar regions of the Moon.</p></a>
        
        </div>
    )
    
    let spaceGrantCard = ["skills", "card"]
    spaceGrantCard["skills"] = "Python, Data Science, Satellite Imagery, Machine Learning";
    spaceGrantCard["card"]= (
        <div className="project_card"><a href="https://lucasjswanson.weebly.com/space-grant-research.html" className="card_button"><h3>NASA Space Grant; Quantifying Climate Change</h3>
            <p>A research project querying and visualizing 15+ years of NASA's sea surface temperature (SST) data on the Kuroshio Current of the Pacific.</p></a>
            <div className = "display-none">
                <p id="spaceGrantCard">ArcGIS Pro Geology</p>
            </div>
        </div>
    )

    let fieldCampCard = ["skills", "card"]
    fieldCampCard["skills"] = "ArcGIS Pro, Geology, Microsoft Office"
    fieldCampCard["card"]=(
        <div className="project_card">
            <a href="https://lucasjswanson.weebly.com/ess-401.html" className="card_button"><h3>ESS 401: Geology Field Camp w/ ArcGIS</h3>
            <p>A six-week full-time course focused on building relevant career skills for aspiring geologists including GIS, field skills and documentation. </p></a>
            
        </div>
    )
    //filter projects to return
    let allCards = [quakeLabCard, clarityAPICard, vesperCard, lspaceCard, spaceGrantCard, fieldCampCard];
    let displayedCards = allCards.map(cardArray =>{
        if(cardArray["skills"].toLowerCase().includes(inputValue.toLowerCase())){
            return cardArray["card"];
        }
    })
    
    return(
        <div><SearchBar inputValue={inputValue} setInputValue={setInputValue} />
        
        <div className="project_cards">
            {displayedCards}
        </div>
        </div>
    )
}
