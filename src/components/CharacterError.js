import React from 'react';
import icon from '../images/mistake.png' 
const CharacterError =(props)=>{
    return(
        <div className="CharacterError">
           <div className="ceGeneral">
           <div className="blue">
                <p className="ceText">{`ERROR, ${props.inputValue} not found!`}</p>
            </div> 
            <img alt="rick error" className="ceImg" src={icon}></img>
            </div>
        </div>
    )
}
export default CharacterError;