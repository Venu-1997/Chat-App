import { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useLogIn = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const login = async(userName,password) => {
        const success = handleInputErrors(userName,password);
        if(!success) return;

        setLoading(true);
        
        try{
            const res = await fetch("/api/auth/login",{
                method: "POST",
                headers: { "Content-type" : "application/json"},
                body: JSON.stringify({userName,password})
            });

            const data = await res.json();
            if(data.error) throw new Error(data.error);

            //we need to set it in Local storage So,if we reload data doesn't go
            localStorage.setItem("chat-user",JSON.stringify(data));
            setAuthUser(data);
        }
        catch(e){
            toast.error(e.message);
        }
        finally{
            setLoading(false);
        }
    }
    return {loading,login};
}

function handleInputErrors(userName,password){
    if( !userName || !password ){
        toast.error('Please fill in all the fields');
        return false;
    }

    return true;
}

export default useLogIn
