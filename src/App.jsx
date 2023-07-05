// import './App.css';
import React, { useEffect, useState } from 'react';
import MessageCard from './MessageCard';
function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Create a WebSocket connection
    const socket = new WebSocket('ws://localhost:5000');

    // Handle messages received from the WebSocket server
    socket.onmessage = (event) => {
      const message = event.data;
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    // Cleanup function to close the WebSocket connection
    return () => {
      socket.close();
    };
  }, []);
  return (
    <div className="overscroll-behavior: none">
      
        {/* <div className='bg-violet-600 rounded-md flex justify-center items-center'> */}
        {/* </div> */}
      <div className="bg-violet-600 m-40 mt-0 rounded-md ">
          <h1 className="my-3 text-white justify-center text-center font-bold text-5xl">Client Message BroadCast</h1>
        {/* <h2>Message List</h2> */}
        <div className='grid flex-row justify-center items-center bg-slate-900'>
        
          {messages.map((message, index) => (
            <MessageCard key={index} message={message}/>
            ))}
        
        </div>
      </div>
    </div>
    
  );
}

export default App;
