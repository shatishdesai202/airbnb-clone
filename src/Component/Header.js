import React from 'react';
import './Header.css';
import airbnbImage from '../Images/airbnb.png';
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, IconButton } from "@material-ui/core";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img className="header__icon" src={airbnbImage} alt="airbnbImage"/>            
            </Link>

            <div className="header__center">
                <input type="text" />
                
                <IconButton>
                    <SearchIcon/>
                </IconButton>

            </div>

            <div className="header__right">
                Become a Host
                <IconButton>
                    <LanguageIcon/>
                </IconButton>
                
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
                
                <IconButton>
                    <Avatar/>
                </IconButton>
            </div>


        </div>
    )
}

export default Header;
