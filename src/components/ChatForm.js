import React from 'react';

class ChatForm extends React.Component{


    handleNewMessage=(event)=> {
        event.preventDefault();
        const user = this.refs.user.value;
        const message = this.refs.message.value;
       // console.log(author)
       // console.log(text)
       
      this.props.socket.socket.post('/chat/broadcast',{ roomName: 'myroom',user:user,message:message },
        function(data,status){
            console.log(data);
        })
        this.props.onNewMessage({user: user, message: message});
        this.refs.message.value = '';
        this.refs.user.value = '';
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