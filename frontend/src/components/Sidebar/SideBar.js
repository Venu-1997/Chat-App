import React from 'react'
import SearchInput from './SearchInput.js';
import Conversations from './Conversations.js';
import LogoutIcon from './LogoutIcon.js';

const SideBar = () => {
    return (
        <div className='border-r border-slate-500 p-4 flex flex-col'>
            <SearchInput />
            <div className="divider px-3"></div>
            <Conversations />
            <LogoutIcon />
        </div>
    )
}

export default SideBar;
