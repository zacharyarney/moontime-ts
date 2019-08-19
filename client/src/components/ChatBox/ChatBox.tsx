import React, { useEffect } from 'react';
import { ChatInput } from './ChatInput/ChatInput';
import { MessageWindow } from './MessageWindow/MessageWindow';
import { socket } from '../../util/socketStuff.js';

export const ChatBox: React.FC = () => {
  useEffect(() => {
    socket.on('connection', () => {})
  }, [])
  return (
    <div>
      <MessageWindow />
      <ChatInput />
    </div>
  )
}
