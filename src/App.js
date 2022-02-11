import React, { PureComponent } from "react";
import "./App.css";
import CustomButton from "./components/CustomButton";

import CustomButtonClass from "./components/CustomButtonClass";

import CustomButtonWithRef from "./components/CustomButtonWithRef";

import CustomButtonForwardRef from "./components/CustomButtonForwardRef";

//HOC
import WrappedCustomButton from "./components/WrappedCustomButton";

import reactDom from "react-dom";
class App extends PureComponent {
  constructor(props) {
    super(props);
    //**Простой реф для работы в самом компоненте App**
    this.simpleRef = React.createRef();

    //**Коллбэк-реф реф для передачи в дочерний компонент**
    this.cbkRef = null;
    this.setCbkRef = (element) => (this.cbkRef = element);

    //**Реф для ссылки на компонент (и вызова его метода)**
    this.componentRef = React.createRef();

    //**Реф для прокидывания через React.forwardRef**
    this.forwardRef = React.createRef();

    //**Реф для HOC**
    this.hocRef = React.createRef();

    this.toggleTextContent = this.toggleTextContent.bind(this);
  }

  componentDidMount() {
    console.log(this.hocRef.current);
    setTimeout(() => this.hocRef.current.toggleStatus(), 2000);
  }
  render() {
    return (
      <div className="App">
        <h1>t9, задание 3: Рефы</h1>
        <section className="example">
          <h3>1) Простой реф в самом компоненте</h3>
          <button
            onClick={() => this.toggleTextContent(this.simpleRef.current)}
            ref={this.simpleRef}
          >
            send
          </button>
        </section>
        <section className="example">
          <h3>2) Передача коллбэк-рефа в дочерний компонент</h3>
          <CustomButton
            clickHandler={() => this.toggleTextContent(this.cbkRef)}
            setRef={this.setCbkRef}
          >
            send
          </CustomButton>
        </section>

        <section className="example">
          <h3>3) Передача рефа и вызов метода классвого компонента</h3>
          <CustomButtonClass
            /*Вызываем собственный метод компонента CustomButtonClass*/
            clickHandler={() => this.componentRef.current?.toggleName()}
            /*Ссылка указывает на компонент Реакт, а не на DOM-ноду*/
            ref={this.componentRef}
          >
            SEND
          </CustomButtonClass>
        </section>

        <section className="example">
          <h3>
            4) Использование собственного рефа внутри функционального компонента
          </h3>
          <CustomButtonWithRef
            clickHandler={this.toggleTextContent}
            setRef={this.setCbkRef}
          >
            send
          </CustomButtonWithRef>
        </section>

        <section className="example">
          <h3>5) прокидывание рефа при помощи React.forwardRef</h3>
          <CustomButtonForwardRef
            clickHandler={() => this.toggleTextContent(this.forwardRef.current)}
            ref={this.forwardRef}
          >
            send
          </CustomButtonForwardRef>
        </section>

        <section className="example">
          <h3>6) Higher Order Component</h3>
          <WrappedCustomButton
            /* Без использования React.forwardRef ссылка будет на HOC-обёртке, а не внутреннем компоненте*/
            ref={this.hocRef}
          >
            [send]
          </WrappedCustomButton>
        </section>
      </div>
    );
  }
  toggleTextContent(el) {
    if (!el) return;
    console.log(reactDom.findDOMNode(el));
    el.textContent = el.textContent === "send" ? "sending..." : "send";
  }
}

export default App;
