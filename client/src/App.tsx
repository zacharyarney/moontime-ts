import React from 'react';
import './App.css';
import { ChatBox } from './components/ChatBox/ChatBox';

const App: React.FC = () => {
  return (
    <div className="App">
      App goes here
      <ChatBox />
    </div>
  );
}

export default App;
