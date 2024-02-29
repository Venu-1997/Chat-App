import { useEffect, useState } from 'react'
import toast from 'react-hot-toast';


const useGetConversations = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const getConversations = async() => {
            setLoading(true);
            try{
                
                const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWQ2ZDZiODIxYmMxZTEyOTEwY2JkNzAiLCJpYXQiOjE3MDg1OTQ5MDUsImV4cCI6MTcwOTg5MDkwNX0.4RuZJ44ZI586M1h8c-Ptc5GStZWNjdJ1sKZB-pCn_WA'; // Replace this with your actual token
                const requestOptions = {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}` // Include the token in the Authorization header
                    }
                };
                const res = await fetch("/api/users", requestOptions);

                const data = await res.json();
                if (data.error) throw new Error(data.error);
                setConversations(data);
            }
            catch(e){
                toast.error(e.message);
            }
            finally{
                setLoading(false);
            }
        }
        getConversations();
    },[]);
    return {loading,conversations};
}

export default useGetConversations;


// const useGetConversations = () => {
//     const [loading, setLoading] = useState(false);
//     const [conversations, setConversations] = useState([]);

//     useEffect(() => {
//         const getConversations = async() => {
//             setLoading(true);
//             try{
//                 const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWQ2ZDZiODIxYmMxZTEyOTEwY2JkNzAiLCJpYXQiOjE3MDg1OTQ5MDUsImV4cCI6MTcwOTg5MDkwNX0.4RuZJ44ZI586M1h8c-Ptc5GStZWNjdJ1sKZB-pCn_WA'; // Replace this with your actual token
//                 const requestOptions = {
//                     method: 'GET',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'Authorization': `Bearer ${token}` // Include the token in the Authorization header
//                     }
//                 };
//                 const res = await fetch("http://localhost:5030/api/users", requestOptions);

//                 const data = await res.json();

//                 console.log(data);
//                 if (data.error) throw new Error(data.error);
//                 setConversations(data);
//             }
//             catch(e){
//                 toast.error(e.message);
//             }
//             finally{
//                 setLoading(false);
//             }
//         }
//         getConversations();
//     },[]);
//     return {loading,conversations};
// }

// export default useGetConversations;