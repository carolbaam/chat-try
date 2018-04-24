import React from 'react';
import ChatForm from './ChatForm';
import ChatList from './ChatList'
import io from 'socket.io-client';

class ChatBox extends React.Component{
 constructor(props){
     super(props)
     this.state={ 
         messages:this.props.messages,
        
    } 
     this.handleNewMessage=this.handleNewMessage.bind(this)
 }



  //convertir a arrow function todas las internas
   componentDidMount() {
    const socketIOClient = require('socket.io-client');
    const sailsIOClient = require('sails.io.js');
    
    // Instantiate the socket client (`io`)
    // (for now, you must explicitly pass in the socket.io client when using this library from Node.js)
    const io = sailsIOClient(socketIOClient);
    io.sails.url = 'http://216.224.183.21:1339';
    //const apiUrl="http://216.224.183.21:1339";
    
     
     io.socket.on('connect', function() {
     
      io.socket.get('/chat/subscribe?roomName=myroom', function(messages) {
        console.log(messages)
       this.setState({message: messages})
       
      }.bind(this));

      io.socket.on('msg', function(newMessage) {
        this.setState({
            messages: this.state.messages.concat([newMessage]),
            
        });
       // io.socket.emit('msg',newMessage);
        console.log(newMessage)
        console.log(newMessage.message);
        console.log(newMessage.user);
        
      }.bind(this));
      
    }.bind(this));
  }
  
  handleNewMessage(newMessage) {

  /*io.sails.url = 'http://216.224.183.21:1339';
  io.socket.post('/chat/broadcast', newMessage);
  */ const user=this.state.user;
    const messages = this.state.messages;
    messages.push(newMessage);
    this.setState({
        message: messages,
        user:user
    });
   
  }



   
   render(){
       return(
        
            <div className="ChatBox">
              <h2>Lista de mensajes</h2>
              <ChatList messages={this.state.messages} />
              <ChatForm onNewMessage={this.handleNewMessage}/>
            </div>
       )
   }
      
  };
    
    

    export default ChatBox;