import React, { useContext } from "react";

//INTERNAL INPORT
import Style from "./Input.module.css";

const Input = ({ inputType, title, placeholder, handleClick }) => {
  return (
    <div className={Style.input}>
      <p>{title}</p>
      {/* // */}
      {inputType === "text" ? (
        <div className={Style.input__box}>
          <input
            type="text"
            className={Style.input__box__form}
            placeholder={placeholder}
            onChange={handleClick}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Input;
