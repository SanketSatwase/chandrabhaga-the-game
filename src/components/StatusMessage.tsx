
import React, { useState, useEffect } from 'react';

interface StatusMessageProps {
  message: string;
}

const StatusMessage: React.FC<StatusMessageProps> = ({ message }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 3000); // Message disappears after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className="h-10 flex items-center justify-center text-center">
      <p
        className={`transition-opacity duration-500 text-md font-medium text-stone-600 italic ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {message}
      </p>
    </div>
  );
};

export default StatusMessage;
