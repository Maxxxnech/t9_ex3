import React from "react";

const btnStyle = {
  background: "linear-gradient(red, gray)",
};

// Пробрасываем реф в дополнение к пропсам при помощи обёртки React.forwardRef
const CustomButtonForwardRef = React.forwardRef((props, forwardedRef) => {
  return (
    <button className="custom-btn" onClick={props.clickHandler} ref={forwardedRef} style={btnStyle}>
      {props.children}
    </button>
  );
});

export default CustomButtonForwardRef;
