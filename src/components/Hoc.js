/*import React from 'react';
import io from 'socket.io-client';
import ChatBox from './Chat';
import {messages} from './messages';

 class Hoc extends React.Component{
    
    
    componentDidMount(){
        const socketIOClient = require('socket.io-client');
        const sailsIOClient = require('sails.io.js');
        
        // Instantiate the socket client (`io`)
        // (for now, you must explicitly pass in the socket.io client when using this library from Node.js)
        const io = sailsIOClient(socketIOClient);
        io.sails.url = 'http://216.224.183.21:1339';
    }

    render(){
return <ChatBox messages={messages} />

    }
    
}

export default Hoc;*/