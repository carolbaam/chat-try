import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {SocketProvider,socketConnect} from 'socket.io-react';
import io from 'socket.io-client';
import ChatBox from './components/Chat';
import {messages} from './components/messages';
import Hoc from './components/Hoc';

// socket.on('msg', msg => console.log(msg)); 

 ReactDOM.render( <ChatBox messages={messages} />,document.getElementById('root'));