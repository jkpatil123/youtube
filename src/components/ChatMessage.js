import React from 'react'
import { FaUserCircle } from "react-icons/fa";

const ChatMessage = ({ name, message }) => {
      return (
        <div className="flex gap-2  p-2 items-center shadow-sm ">
          <FaUserCircle className="text-2xl" />
          <p className="text-sm font-bold">{name}</p>
          <p className="text-sm break-all">{message}</p>
        </div>
      );
    };
    

export default ChatMessage
