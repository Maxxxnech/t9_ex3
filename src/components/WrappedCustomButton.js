import React, {PureComponent} from "react";
import logProps from "./logProps";

class CustomBtn extends PureComponent{
    constructor(props){
        super(props);
        this.ref = React.createRef();
    }
    render(){
        return(
            <button onClick={this.toggleStatus} className="custom-btn" ref={this.ref}>
                {this.props.children}
            </button>
        )
    }
    toggleStatus = ()=> {
        this.ref.current.innerText = this.ref.current.innerText === "[sending...]" ? "[sent]" :  "[sending...]"
    }
}

export default logProps(CustomBtn);