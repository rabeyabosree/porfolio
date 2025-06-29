import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import io from 'socket.io-client';
import { sendMessage , receiveMessage } from './../../redux/chatReducer';

const socket = io('http://localhost:8765');

const ChatApp = () => {
  const [message, setMessage] = useState('');
  const messages = useSelector(state => state.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on('previousMessages', (messages) => {
      messages.forEach(msg => dispatch(receiveMessage(msg)));
    });

    socket.on('newMessage', (msg) => {
      dispatch(receiveMessage(msg));
    });
  }, [dispatch]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const msg = {
        sender: 'User',
        message: message
      };
      socket.emit('newMessage', msg);
      dispatch(sendMessage(msg));
      setMessage('');
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Chat</h2>
      <div className="messages h-64 overflow-y-auto p-2 border border-gray-300 rounded-md bg-gray-100">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            <b className="text-blue-600">{msg.sender}: </b> <span className="text-gray-700">{msg.message}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button onClick={handleSendMessage} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Send</button>
      </div>
    </div>
  );
};

export default ChatApp;
