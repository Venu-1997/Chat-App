import React, { useEffect } from 'react';
import MessagesComponent from './MessagesComponent.js';
import MessageInput from './MessageInput.js';
import { LuMessagesSquare } from "react-icons/lu";
import useConversation from '../store/useConversation.js';
import { useAuthContext } from '../context/AuthContext.js';

const MessageContainer = () => {
    const { selectedConversation , setSelectedConversation } = useConversation();

    useEffect(() => {
        //cleanup function
        return () => setSelectedConversation(null);
    },[setSelectedConversation]);

    return (
        <div className='md:min-w-[850px] flex flex-col'>
            { !selectedConversation ? <NoChatSelection/> : (
                <>
                    <div className="bg-slate-800 px-4 py-2 mb-2">
                        <span className="label-text">To: </span><span className='text-[#e3ede7] font-bold'>{selectedConversation.fullName}</span>
                    </div>
                    <MessagesComponent />
                    <MessageInput />
                </>
            )}
            
            
        </div>
    )
}

export default MessageContainer;

const NoChatSelection = () => {
    const { authUser } = useAuthContext();
    return(
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
                <p>Welcome 👋 {authUser.fullName}</p>
                <p>Select a chat to start messaging</p>
                <LuMessagesSquare className='text-3xl md:text-6xl text-center'/>
            </div>
        </div>
    )
}