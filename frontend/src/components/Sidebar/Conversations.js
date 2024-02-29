/* eslint-disable no-unused-vars */
import React from 'react';
import Conversation from './Conversation.js';
import useGetConversations from '../Hookes/useGetConversations.js';

const Conversations = () => {
  const { loading , conversations} = useGetConversations();
  
  return (
    <div className='py-2 gap-1 flex flex-col overflow-auto'>
      {
        conversations.map((conversation,idx) => (
          <Conversation key={conversation._id} conversation={conversation} lastIdx={idx === conversation.length-1}/>
        ))
      }
      {
        loading ? <span className='loading loading-spinner mx-auto'></span> : null
      }
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </div>
  )
}

export default Conversations;
