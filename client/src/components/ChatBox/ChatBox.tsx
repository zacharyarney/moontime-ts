import React from 'react';
import { ChatInput } from './ChatInput/ChatInput';
import { MessageWindow } from './MessageWindow/MessageWindow';

export const ChatBox: React.FC = () => {
  return (
    <div>
      <MessageWindow />
      <ChatInput />
    </div>
  )
}
