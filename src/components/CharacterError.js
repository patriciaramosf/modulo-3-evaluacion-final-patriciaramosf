import React from 'react';
import icon from '../images/mistake.png'
import { checkPropTypes } from 'prop-types';
const CharacterError =(props)=>{
    return(
        <div className="CharacterError">
            <div className="ceGeneral">
            <img className="ceImg" src={icon}></img>
            <p className="ceText">{`ERROR, ${props.inputValue} doesn´t exist!`}</p>

            </div>
        </div>
    )
}
export default CharacterError;