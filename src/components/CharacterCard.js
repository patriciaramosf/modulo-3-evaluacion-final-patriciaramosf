import React from 'react';
const CharacterCard =(props)=>{

    const {chPhoto, chName, chSpecies, chGender, chStatus } = props;
    return(
        <div className="CharacterCard">
            <div className="CharacterCard__Photo">
                <img className="chPhoto" src={chPhoto}></img>
            </div>
            <div className="CharacterCard__Info">
                <h2 className="chName">{chName}</h2>
                <ul className="chInfo">
                    <li>Species:{chSpecies}</li>
                    <li>Gender:{chGender}</li>
                    <li>Status:{chStatus}</li>
                </ul>
                <p className="moreInfo">More details...</p>
            </div>
        </div>
    )
}
export default CharacterCard;