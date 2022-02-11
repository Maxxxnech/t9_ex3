import React from "react";

const btnStyle = {
  background: "linear-gradient(lightyellow, gray)",
};

export default function CustomButtonWithRef({children, clickHandler}) {
  const ref = React.createRef();
  return <button className="custom-btn" onClick={()=>clickHandler(ref.current)} ref={ref} style={btnStyle}>{children}</button>;
}
