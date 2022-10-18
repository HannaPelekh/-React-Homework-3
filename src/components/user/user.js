import "./user.css"
import React from "react"
import Appbutton from "../../shared/button";

export default class User extends React.Component { 
    
    constructor(props) {
        super(props);          
    }    
    render(){        
        return(
        <>
            <div className="user_container"> 
                <Appbutton
                cb={() => {
                    this.props.deleteUser(this.props.user.id) 
                    this.props.handleShow() 
                }}                 
                className = {'delete'}
                ></Appbutton>                              
                <div className="text-box">
                    <h2 className="title">{this.props.user.title}</h2>
                    <p className="body">{this.props.user.body}</p> 
                </div>   
                <Appbutton
                cb={() => {
                    this.props.editeUser(this.props.user)
                }} 
                className = {'edit'}
                children = {"Edit"}
                ></Appbutton>                
            </div>
        </>
    )} 
}