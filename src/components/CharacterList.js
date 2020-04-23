import React from 'react';
import CharacterCard from './CharacterCard.js';

const CharacterList =(props)=>{
   const {totalData}= props;
    return(
        <ul className="CharacterList"> 
            {totalData
             .filter(characterObj=>characterObj.name.toLowerCase().includes(props.inputValue.toLowerCase()))
            .map(characterObj=>
            <li key={characterObj.id}>
                <CharacterCard  chPhoto={characterObj.image}
                                chName={characterObj.name}
                                chSpecies={characterObj.species}
                                chGender={characterObj.gender}
                                chStatus={characterObj.status}
                />
            </li>
                )} 
        </ul>
    )
}
export default CharacterList;