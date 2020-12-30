import React from 'react';
import mail from '../img/mail.jpg';
import twitter from '../img/twitter.jpg';
import linkedln from '../img/linkedln.jpg';
const Contact=()=>{
    return (
        // <div>
            <div className="contact">
                <a href="mailto:akagragupta@gmail.com"><img src={mail} alt=""/></a> 
                <a href="https://www.linkedin.com/in/akagra-gupta/"><img src={linkedln
                } alt=""/></a>
                <a href="https://twitter.com/akagra_gupta"><img src={twitter} alt=""/></a>
            </div>
        // </div>
    )
}

export default Contact;