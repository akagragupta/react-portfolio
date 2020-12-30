import React from 'react';
import bliss from '../img/bliss.jpg';
import dish from '../img/dish.jpg';
import convey from '../img/convey.jpg';
import office from '../img/office.jpg';


const Projects=()=>{
    // var bliss= require('../img/bliss.jpg');
    return (
        
        <div className="proj scrollcol scroller">
            <div className="page">
                <a href="https://blissmusic.netlify.app" rel="noreferrer" target="_blank"><img src={bliss} alt="this is not loading"/></a>
                <div className="heading"><h3>This is a music app made using react. Go ahead and check it out</h3></div>
            </div>
            <div className="page">
                <a href="https://github.com/Akagra007/Innovaccer" rel="noreferrer" target="_blank"><img src={office} alt="this is not loading"/></a>
                <div className="heading"><h3>Its a django app which help you managing your visitors in office and keep you updated on visitors timing</h3></div>
            </div>
            <div className="page">
                <a href="https://github.com/akagragupta/conveysystem" rel="noreferrer" target="_blank"><img src={convey} alt="this is not loading"/></a>
                <div className="heading"><h3>One can use it for ordering anything from city and one cn also deliver and start earning</h3></div>
            </div>
            <div className="page">
                <a href="https://github.com/akagragupta/foodrecipe" rel="noreferrer" target="_blank"><img src={dish} alt="this is not loading"/></a>
                <div className="heading"><h3>This is a react app which use api to give you some awesome dishes based on your search</h3></div>
            </div>
        </div>    
        
    )
}

export default Projects;