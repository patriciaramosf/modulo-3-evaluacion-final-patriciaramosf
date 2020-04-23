import React from 'react';
import { checkPropTypes } from 'prop-types';

const Filter =(props)=>{
const{handleInputValue, inputValue}=props
const handleInputChange=(event)=> handleInputValue(event.currentTarget.value)
const handleSubmit=(event)=> event.preventDefault
    return(
        <div className="Filter">
            <label>BUSCADOR</label>
            <input  type="text"
                    value={inputValue}
                    name="input"
                    placeholder="Rick"
                    onChange={handleInputChange}
                    onSubmit={handleSubmit}
            />
        </div>
    )
}
export default Filter;