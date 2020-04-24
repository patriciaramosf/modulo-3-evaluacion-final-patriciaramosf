import React from 'react';
import { checkPropTypes } from 'prop-types';
const CharacterError =(props)=>{
    return(
        <div className="CharacterError">
            <div className="ceGeneraL">
            <p>{`ERROR, EL PERSONAJE ${props.inputValue} NO EXISTE`}</p>
            <img></img>
            </div>
        </div>
    )
}
export default CharacterError;