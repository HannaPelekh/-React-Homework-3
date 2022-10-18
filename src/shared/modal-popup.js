import React from "react";
import ReactDOM from "react-dom";

const modalRootEl = document.getElementById('modal-root');

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {    
    modalRootEl.appendChild(this.el);
  }

  componentWillUnmount() {   
    modalRootEl.removeChild(this.el);
  }
  
  render() {   
    return ReactDOM.createPortal(      
      this.props.children,      
      this.el,
    );
  }
}



  
   