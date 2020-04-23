import React from 'react';
import {Link} from 'react-router-dom';
const CharacterCard =(props)=>{
    const {chPhoto, chName, chSpecies, chGender, chStatus, chDetails, chId } = props;
    return(
        <div className="CharacterCard">
            <div className="CharacterCard__Photo">
                <img alt={chName} className="chPhoto" src={chPhoto}></img>
            </div>
            <div className="CharacterCard__Info">
                <h2 className="chName">{chName}</h2>
                <ul className="chInfo">
                    <li>Species:{chSpecies}</li>
                    <li>Gender:{chGender}</li>
                    <li>Status:{chStatus}</li>
                </ul>
                <Link to={`/character/${chId}`}>
               <p className="moreInfo">{chDetails}</p>
               </Link>
            </div>
        </div>
    )
}
export default CharacterCard;