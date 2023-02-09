import portrait_lswans from './portrait_lswans.jpeg';

export function About(){
    return(
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
)
}