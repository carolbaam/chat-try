import React from 'react';

class ChatForm extends React.Component{


    handleNewMessage=(event)=> {
        event.preventDefault();
        const user = this.refs.user.value;
        const message = this.refs.message.value;
       // console.log(author)
       // console.log(text)
       /* const socketIOClient = require('socket.io-client');
        const sailsIOClient = require('sails.io.js');
        const io = sailsIOClient(socketIOClient);
        io.sails.url = 'http://216.224.183.21:1339';*/
       /* io.socket.post('/chat/broadcast',{ roomName: 'myroom',user:user,message:message },
        function(data,status){
            console.log(data);
        })  */
        this.props.onNewMessage({user: user, message: message});
        this.refs.message.value = '';
      }
  
    
    
    render(){
        return(
        <form className="ChatForm" onSubmit={this.handleNewMessage}>
        <input type="text" placeholder="user" className="author" ref="user"/>
        <input type="text" placeholder="message..." className="text" ref="message" />
        <input type="submit" value="Send" />
          </form>
          
        )
    }
}

export default ChatForm