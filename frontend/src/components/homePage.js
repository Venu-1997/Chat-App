import React from 'react';
import SideBar from './Sidebar/SideBar.js';
import MessageContainer from './MessageContainer/MessageContainer.js';

const HomePage = () => {
    return (
        <div className='flex sm:h-[450px] md:h-[750px] rounded-lg overflow-hidden bg-black bg-clip-padding backdrop-filter bg-opacity-0 '>
            <SideBar />
            <MessageContainer />
        </div>
    )
}

export default HomePage;
