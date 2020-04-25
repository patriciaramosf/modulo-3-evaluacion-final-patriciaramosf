import React from 'react';
import {Link} from 'react-router-dom';

const CharacterDetails =(props)=>{
    const {detailObj} = props;
    return(
        <div className="CharacterDetails__container">
            <div className="CharacterDetails">
                <div className="CharacterDetails__Photo">
                    <img alt={detailObj.name} className="cdPhoto" src={detailObj.image}/>
                </div>
                <div className="CharacterDetails__Info">
                <h2 className="cdName">{detailObj.name}</h2>
                    <ul className="cdInfo">
                        <li><span className="infoTitleDetail">Species: </span>{detailObj.species}</li>
                        <li><span className="infoTitleDetail">Gender: </span>{detailObj.gender}</li>
                        <li><span className="infoTitleDetail">Status: </span>{detailObj.status}</li>
                        <li><span className="infoTitleDetail">Origin: </span>{detailObj.origin.name}</li>
                        <li><span className="infoTitleDetail">Last Location: </span>{detailObj.location.name}</li>
                        <li><span className="infoTitleDetail">Episodes: </span>{detailObj.episode.length}</li>
                    </ul>
                </div>
                <Link to='/'>
                    <div className="backTo"><i className="fas fa-times"></i></div>
                    </Link>
            </div>
            </div>
    )
}
export default CharacterDetails;