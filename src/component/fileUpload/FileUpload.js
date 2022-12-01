import React from "react";

const FileUpload=(props)=>{
  return(
    <div className="file">
        <input type="file" className="file-upload" onChange={props.onChange}  required />
        <img src={props.src} alt="Upload profile" className={props.imgsize} style={props.style} />
        <p className={props.error_msg}>please select a file less than 3MB</p>
        </div>
  )
}

export default FileUpload;