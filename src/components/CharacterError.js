import React from 'react';
import { checkPropTypes } from 'prop-types';
const CharacterError =(props)=>{
    return(
        <div className="CharacterError">
             <p>{`ERROR, ESTE PERSONAJE ${props.inputValue} NO EXISTE`}</p>
        </div>
    )
}
export default CharacterError;