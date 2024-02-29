import { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useLogOut = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const logOut = async() => {
        
        setLoading(true);
        
        try{
            const res = await fetch("/api/auth/logout",{
                method: "POST",
                headers: { "Content-type" : "application/json"}
            });

            const data = await res.json();
            if(data.error) throw new Error(data.error);

            //we need to set it in Local storage So,if we reload data doesn't go
            localStorage.removeItem("chat-user");
            setAuthUser(null);
        }
        catch(e){
            toast.error(e.message);
        }
        finally{
            setLoading(false);
        }
    }
    return {loading,logOut};
}

export default useLogOut;
