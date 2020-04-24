import React from 'react';
import { checkPropTypes } from 'prop-types';

const Filter =(props)=>{
const{handleInputValue, inputValue, handleCheckValue}=props
const handleInputChange=(event)=> handleInputValue(event.currentTarget.value)
const handleSubmit=(event)=> event.preventDefault
const handleCheck=()=>handleCheckValue()
const handleCheckAlien=()=>handleCheckValue()
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
            <div className="checkFilter">
                <div className="human">
                    <label>Humans</label>
                    <input  type="checkbox" 
                            className="checkInput"
                            onChange={handleCheck}
                            checked={props.inputChecked}
                    />
                </div>
                <div className="alien">
                    <label>Aliens</label>
                    <input  type="checkbox" 
                            className="checkInput"
                            onChange={handleCheckAlien}
                            checked={props.inputChecked}
                    />
                </div>
        </div>
            </div>
    )
}
export default Filter;