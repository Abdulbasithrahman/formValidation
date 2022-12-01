import React from "react";
import './Radiobox.css';

const Checkbox = ({label,onChangeRadio,...inputProps}) => {
  return (
    <div className="check-com"  >
      <div className="check-radio" >
        <input className="check-input"{...inputProps} onChange={onChangeRadio} required/>{label}
      </div>
    </div>
  )
}

export default Checkbox;
