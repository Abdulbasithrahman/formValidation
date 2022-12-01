import React from 'react'
import Select from 'react-select'
import Option from './Options.js'

const DropDown = (props) => {
    return(
        <div style={{width:"520px",padding:"0px 10px"}}>
        <Select
    isMulti
    options={props.Optionsopt}
    components={{
        Option
    }}
    name={props.name}
    onChange={props.OnChangedown}
    closeMenuOnSelect={false}
    hideSelectedOptions={false}
    classNamePrefix="select"
  />
  </div>
    )
 }
export default DropDown