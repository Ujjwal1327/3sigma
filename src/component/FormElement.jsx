import React from "react";

const FormElement = (props) => {
  return (
    <div className="element">
      <label>{props.title}</label>
      <div className="input-icon-feild">
        {props.children}
        <input type={props.type} placeholder={props.placeholder} />
      </div>
    </div>
  );
};

export default FormElement;
