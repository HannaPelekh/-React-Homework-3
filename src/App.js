import React from 'react';
import User from './components/user/user';
import Message from './components/message/message';
import Edite from './components/editeMode/edite-user';
import './App.css';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {              
      users: [],
      currentUser: null,
      showModal: false,
      isEditeMode: false,
    }       
  }   

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((r) => r.json())
    .then((users) => this.setState({users: users.slice(0,16)}))
  }

  handleShow = () => {
    this.setState({showModal: true});
  }
  
  handleHide = () =>  {
    this.setState({showModal: false});
  }

  deleteUser = async (id) => {  
    try {
      await fetch('https://jsonplaceholder.typicode.com/posts/${id}', {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
      },
    }) 
    this.setState({ ...this.state,
      users: this.state.users
          .filter(user => 
             user.id !== id),
             showModal: true,
    });  
    
  } catch {
    console.log("Fetch Error :-S")
  }  
}
editeUser = (user) => {
  this.setState({...this.state,             
    currentUser: user, 
    isEditeMode: true}); 
}
handEditeMode = () =>  {
  this.setState({isEditeMode: false});
}
saveEdite = async (id, user) => {  
  try {
    await fetch('https://jsonplaceholder.typicode.com/posts/${id}', {
      method: 'PATCH',
      body: JSON.stringify({
        title: `${user.title}`,
        body: `${user.body}`,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
  } catch {
    console.log("Fetch Error :-S")
  }   
    this.setState({
        ...this.state, 
        users: [...this.state.users.map((u) => (u.id === id ? user : u), )],        
        currentUser: null,
        showModal: true,
        isEditeMode: false,
    });  
}
render () {   
    const message = this.state.showModal ? (
      <Message 
      handleHide = {this.handleHide}
      />  
    ) : null;  
    if(!this.state.isEditeMode){   
      return (       
          <div className="users_container">              
            {this.state.users.map((user) => (
                <User
                    key={user.id} 
                    user={user} 
                    editeUser = {this.editeUser} 
                    deleteUser = {this.deleteUser}  
                    handleShow = {this.handleShow}                                  
                ></User>
            ))}             
          {message}      
        </div>
      )
    }
    if(this.state.isEditeMode){ 
      return (       
          <div className="edite-container"> 
            <Edite               
              saveEdite = {this.saveEdite} 
              handEditeMode = {this.handEditeMode}
              handleShow = {this.handleShow}
              user = {this.state.currentUser}                                                                  
            ></Edite>
            {message}      
          </div>
      )
    }
  } 
}


