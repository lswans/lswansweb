import { React, useState } from 'react';
import {BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill} from 'react-icons/bs';
import {SearchBar} from "./SearchBar";

export function CardPage(props){
    const [inputValue, setInputValue] = useState('')//initialize as empty string
    
    let group1 = props.group1;
    let group2 = props.group2;
    let group3 = props.group3;
    let [currentCardGroup, setCurrentCardGroup] = useState(group1);
    
    function handleLeftClick(){
        console.log(currentCardGroup[0].id);
        if(currentCardGroup[0].id === 0){
            setCurrentCardGroup(group3);
        }
        else if(currentCardGroup[0].id === 2){
            setCurrentCardGroup(group1);
        }
        else if(currentCardGroup[0].id === 4){
            setCurrentCardGroup(group2);
        }
        
    }
    function handleRightClick(){
        if(currentCardGroup[0].id === 0){
            setCurrentCardGroup(group2);
        }
        else if(currentCardGroup[0].id === 2){
            setCurrentCardGroup(group3);
        }
        else if(currentCardGroup[0].id === 4){
            setCurrentCardGroup(group1);
        }
        console.log("no branch");
    }
    
    return(
    <div>
        <h2 id="projects" data-aos="fade-up">My Projects</h2>
        <div className="mobileButtons">
            <BsFillArrowLeftSquareFill id="leftArrowMobile" onClick={handleLeftClick}/>
            <BsFillArrowRightSquareFill id="rightArrowMobile" onClick={handleLeftClick}/>
        </div>
        <div className="project_cards">
            <BsFillArrowLeftSquareFill id="leftArrowDesktop" onClick={handleLeftClick}/>
            {currentCardGroup[0].card}
            {currentCardGroup[1].card}
            <BsFillArrowRightSquareFill id="rightArrowDesktop" onClick={handleRightClick}/>
        </div>
        
    </div>
    )
}
