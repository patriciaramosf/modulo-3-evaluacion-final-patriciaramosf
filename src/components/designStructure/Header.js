import React from 'react';
import HeaderImage from '../../images/rick_logo.png'
const Header =()=>{
    return(
        <header className="Header">
            <img alt="Rick and Morty" className="Header__image" src={HeaderImage}></img>
        </header>
    )
}
export default Header;