import React from 'react';
import { checkPropTypes } from 'prop-types';

const Filter =(props)=>{
const{handleInputValue, inputValue}=props
const handleInputChange=(event)=> handleInputValue(event.currentTarget.value)
const handleSubmit=(event)=> event.preventDefault
    return(
        <div className="Filter">
            <form className="FilterForm">
                <input  type="text"
                        value={inputValue}
                        name="input"
                        placeholder="Find your favourite character"
                        onChange={handleInputChange}
                        onSubmit={handleSubmit}
                        className="inputForm"
                />
                <label><i class="fas fa-search"></i></label>
            </form>
            </div>
    )
}
export default Filter;