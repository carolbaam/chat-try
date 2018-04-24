import React from 'react';

export default class ChatMessage extends React.Component{
    render(){
        return (
            <li className="ChatMessage">
              <span className="author"><strong>{this.props.user} dice: </strong></span>
              <span className="message">"{this.props.message}"</span>
            </li>
            );
    }


}