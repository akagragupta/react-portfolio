import React from 'react';
import {Link} from 'react-router-dom';

const Nav =({activated}) =>{

    console.log("ok"+activated);
    const styles = {
        lineHeight: 0.98,
        marginBottom:15
      }

    
    return (
        <div >
            
        <div className={`navbar ${activated ? "activate": ""}`} >
            <Link to="/"><h1 id="name" style={styles} >HOME</h1></Link> 
            <Link  to="/aboutme"><h1 id="about">ABOUT ME</h1></Link>
            <Link to="/project"> <h1 id="project">PROJECTS</h1></Link> 
            <Link to="/contact"><h1 id="contact">CONTACT</h1></Link>
        </div>
        </div>
    )
}

export default Nav;