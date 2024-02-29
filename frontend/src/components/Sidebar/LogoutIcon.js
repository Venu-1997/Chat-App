import React from 'react';
import { TbLogout2 } from "react-icons/tb";
import useLogOut from '../Hookes/useLogOut';

const LogoutIcon = () => {
    const {loading , logOut} = useLogOut();
    return (
        <div className='mt-auto'>
            {
                !loading ? (
                    <TbLogout2 className='w-6 h-6 text-white cursor-pointer' onClick={logOut} />
                ) : (
                    <span className='loading loading-spinner'></span>
                )
            }
            
        </div>
    )
}

export default LogoutIcon;
