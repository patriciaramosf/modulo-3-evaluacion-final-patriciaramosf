import React from 'react';
import CharacterCard from './CharacterCard.js';
import CharacterError from './CharacterError.js'

const CharacterList =(props)=>{
   const {totalData, inputValue}= props;
   console.log(totalData.length)
  if(totalData.length===0){
       return <CharacterError inputValue={inputValue}
                />
   }else{
    return(
        <ul className="CharacterList"> 
            {totalData
             .filter(characterObj=> inputValue === '' ||characterObj.name.toLowerCase().includes(inputValue.toLowerCase()))
            .map(characterObj=>
                <li key={characterObj.id}>
                    <CharacterCard  chPhoto={characterObj.image}
                                    chName={characterObj.name}
                                    chSpecies={characterObj.species}
                                    chGender={characterObj.gender}
                                    chStatus={characterObj.status}
                                    chDetails='More details'
                                    chId={characterObj.id}
                    />
                </li>
                )}
        </ul>
    )
            }
    
}
export default CharacterList;
