import React from 'react';
import ChatMessage from './ChatMessage';

class ChatList extends React.Component{
    render(){
        const messages = this.props.messages.map(function (message, index) {
            return (<ChatMessage
            
                      user={message.user}
                      message={message.message}
                      key={index}/>
                   );
          });
        return(
            <ul className="ChatList">
            {messages}
          </ul>
        )
    }


}

export default ChatList;