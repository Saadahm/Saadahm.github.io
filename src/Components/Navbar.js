import React from 'react';
import "../assets/css/Navbar.css";
import DehazeOutlinedIcon from '@material-ui/icons/DehazeOutlined';

function navbar() {
    return (
        <div className="navbar">
            
            <p className="header__line"><DehazeOutlinedIcon /></p>
            <div className="navbar__option">
                <span>Groceries and Essentials</span>
            </div>
            <div className="navbar__option">
                <span>Pickup and Drop</span>
            </div>
            <div className="navbar__option">
                <span>Restaurants</span>
            </div>
            <div className="navbar__option">
                <span>Fruits and Vegetables</span>
            </div>
            <div className="navbar__option">
                <span>Dunzo For Partners</span>
            </div>
            <div className="navbar__option">
                <span>Need Delivery Partners?</span>
            </div>
            
           
        </div>
    )
}

export default navbar
