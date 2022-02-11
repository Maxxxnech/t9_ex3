import React, { PureComponent } from "react";

export default function logProps(WrappedComponent) {
   class LogProps extends PureComponent {
    // constructor(props) {
    //   super(props);
    // }
    componentDidMount(prevProps) {
      console.log("old props: ", prevProps);
      console.log("current props: ", this.props);
    }
    render() {
     
      return <WrappedComponent ref={this.props.forwardedRef} {...this.props} />
    }
  };
 /* Без использования React.forwardRef ссылка будет на HOC-обёртке, а не внутреннем компоненте*/
  return React.forwardRef((props, ref) => {return <LogProps forwardedRef={ref} {...props} />});
}
