import React, { useState } from 'react';

export const ChatInput: React.FC = () => {
  // This is hooks
  const [value, setValue] = useState<string>('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  return (
    <input value={value} onChange={handleInput} />
  )
}
