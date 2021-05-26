import React from 'react';
import "../assets/css/Footer.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__options">
                <img className="footer__Logo" src="https://resources.dunzo.com/web-assets/prod/_next/static/images/logo-footer-a7423f59ce95bf41719960ee8314ff2d.png" alt="Dunzo"/>

                <p className="footer__language"> English - EN <ExpandMoreIcon /></p>
            </div>

            <div className="footer__options">
                <span className="footer__option">Bangalore</span>
                <span className="footer__option">Pune</span>
                <span className="footer__option">Gurgaon</span>
                <span className="footer__option">Hyderabad</span>
                <span className="footer__option">New Delhi</span>
                <span className="footer__option">Chennai</span>
                <span className="footer__option">Mumbai</span>
              
            </div>
        </div>
    )
}

export default Footer
