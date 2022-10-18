import "./edite-user.css"
import React from "react"
import Appbutton from "../../shared/button";
import AppInput from "../../shared/input"

export default class Edite extends React.Component { 
    
    constructor(props) {
        super(props);   
        this.state = { 
            title: null,
            body: null,             
        }              
    } 
    setProperty = (e) => {        
        const newState = {...this.state}
        newState[e.target.name] = e.target.value;
        this.setState(newState);        
    }      
    render(){             
        return(
            <div className="edite-box">
                <AppInput 
                    name={"title"}
                    className={"input_title"}                      
                    defaultValue = {this.props.user.title} 
                    onChange={this.setProperty}                      
                    >                                             
                </AppInput>
                <AppInput 
                    name={"body"}
                    className={"input_body"}                                              
                    defaultValue = {this.props.user.body}
                    onChange={this.setProperty}
                    >
                </AppInput>
                <Appbutton 
                    className={"save-edite"}  
                    cb={() => {
                        this.props.saveEdite(this.props.user.id, this.state) 
                        this.props.handEditeMode()
                        this.props.handleShow() 
                    }}                                                       
                    >Save Changes
                </Appbutton>
            </div>
    )} 
}

 
               