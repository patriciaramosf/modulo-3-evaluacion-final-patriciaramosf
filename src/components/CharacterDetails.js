import React from 'react';

const CharacterDetails =(props)=>{
    const {detailObj} = props;
    return(
        <div className="CharacterDetails">
            <div className="CharacterDetails__Photo">
                <img alt={detailObj.name} className="cdPhoto" src={detailObj.image}/>
            </div>
            <div className="CharacterDetails__Info">
            <h2 className="cdName"></h2>
                <ul className="chInfo">
                    <li>Species:{detailObj.species}</li>
                    <li>Gender:{detailObj.gender}</li>
                    <li>Status:{detailObj.status}</li>
                    <li>Origin:{detailObj.origin.name}</li>
                    <li>Last Location:{detailObj.name}</li>
                    <li>Episodes:{detailObj.episode.length}</li>
                </ul>
            </div>
        </div>
    )
}
export default CharacterDetails;