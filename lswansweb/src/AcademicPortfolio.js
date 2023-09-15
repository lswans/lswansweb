
import portfolioScreenshot from "./portfolio_screenshot.png";

export function AcademicPortfolio(){
    return(
        <div id="featureCard">
            <h1 id="featureTitle">Academic Portfolio</h1>
            <div className="center_image">
                <img id="portfolio_img" src={portfolioScreenshot}/>
            </div>
            
            <div></div>
        </div>
    )
}