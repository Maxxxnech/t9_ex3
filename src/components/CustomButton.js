import React from "react";

const btnStyle = {
  background: "linear-gradient(lightgreen, gray)",
};

export default function CustomButton({children, setRef, clickHandler}) {

  return <button className="custom-btn" onClick={clickHandler} ref={setRef} style={btnStyle}>{children}</button>;
}
