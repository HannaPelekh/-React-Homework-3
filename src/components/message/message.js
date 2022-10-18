
import React from "react";
import Modal from "../../shared/modal-popup";
import Appbutton from "../../shared/button";
import "./messsage.css"

export default class Message extends React.Component {
  constructor(props) {
    super(props);    
  }
  render() {   
    return (      
      <Modal>
        <div className="messsage-container">
          <div className="messsage-box">
            <Appbutton
              cb={() => {this.props.handleHide()}}                 
              className = {'close'}
            ></Appbutton>            
            <h2 className='message-text'>
                Operation completed successfully        
            </h2>          
          </div>
        </div>
      </Modal>
    );
  }
}

