import React from "react";
import './footer.css';
const Footer=()=>{
    return(
        <footer className="footer line-above" > 
            <p className="copyright" >Copyright &#169; 2024 Mohini Agarwal. All right received.</p>
            <div className="call" >
            <h2>Call</h2><br/>
            <p  className="content">+91 8273242955</p>
            </div>

            <div className="email">
                <h2>Email</h2><br/>
                <p className="content">mohiniagarwal1408@gmail.com</p>
            </div>
        </footer>
    );
}

export default Footer;