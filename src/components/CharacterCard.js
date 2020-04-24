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
                    <li><span className="infoTitle">Species: </span>{chSpecies}</li>
                    <li><span className="infoTitle">Gender: </span>{chGender}</li>
                    <li><span className="infoTitle">Status: </span>{chStatus}</li>
                </ul>
                <Link to={`/character/${chId}`}>
               <p className="moreInfo">{chDetails}</p>
               </Link>
               <div className="icon"><i className={`fas ${chStatus === "Alive" ? "fa-thumbs-up" : "fa-skull-crossbones"}`}></i></div>
            </div>
        </div>
    )
}
export default CharacterCard;