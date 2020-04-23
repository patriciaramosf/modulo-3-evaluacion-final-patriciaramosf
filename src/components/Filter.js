import React from 'react';
import { checkPropTypes } from 'prop-types';

const Filter =(props)=>{
const{handleInputValue, inputValue}=props
const handleInputChange=(event)=> handleInputValue(event.currentTarget.value)
    return(
        <div className="Filter">
            <label>BUSCADOR</label>
            <input  type="text"
                    value={inputValue}
                    name="input"
                    placeholder="Rick"
                    onChange={handleInputChange}
            />
        </div>
    )
}
export default Filter;