import React from 'react';
import CharacterCard from './CharacterCard.js';
import CharacterError from './CharacterError.js'

const CharacterList =(props)=>{
   const {totalData, inputValue}= props;
   const filteredData=[...totalData]
        .sort((a,b)=>a.name.localeCompare(b.name))
        .filter(characterObj=> inputValue === '' ||characterObj.name.toLowerCase().includes(inputValue.toLowerCase()));

            if(filteredData.length===0){
              return <CharacterError inputValue={props.inputValue}
              />
            }else{
              return(
                <ul className="CharacterList"> 
                    {filteredData
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

/* const { isEditMode } = this.state;

return isEditMode ? (
  <p>Editing mode is ON ...</p>
) : (
  <p>Editing mode is OFF ...</p>
); */