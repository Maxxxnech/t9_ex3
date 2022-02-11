import React, { PureComponent } from "react";

const btnStyle = {
  background: "linear-gradient(lightblue, gray)",
};

class CustomButtonClass extends PureComponent {
  constructor(props) {
    super(props);

    this.innerRef = React.createRef();

    this.toggleName = this.toggleName.bind(this);
  }

  render() {
    const { clickHandler, children } = this.props;
    return (
      <button className="custom-btn" onClick={clickHandler} ref={this.innerRef} style={btnStyle}>
        {children}
      </button>
    );
  }
  toggleName() {
    console.log("clicked CustomButtonClass " + this.innerRef.current.textContent);
    this.innerRef.current.textContent =
      this.innerRef.current.textContent === "SEND" ? "SENDING..." : "SEND";
  }
}

export default CustomButtonClass;
