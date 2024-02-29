
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogIn from "./Hookes/useLogIn.js";

const LoginPage = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const { loading , login} = useLogIn();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(userName,password);
    }



    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                Login <span className="text-blue-500"> Chat App</span>
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium leading-6 text-white-100">Username</label>
                        <div className="mt-2">
                            <input type="text" value={userName} onChange={e => setUserName(e.target.value)} placeholder="Enter Username" className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                        <label className="block text-sm font-medium leading-6 text-white-100">Password</label>
                        </div>
                        <div className="mt-2">
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter Password" className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <Link to="/signup" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">Don't have an account</Link>

                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        {loading ? <span className='loading loading-spinner'></span> : "Login" }
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default LoginPage;



// Starter Code
//          <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//             <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//                 <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
//                 Login <span className="text-blue-500"> Chat App</span>
//                 </h2>
//             </div>

//             <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//                 <form className="space-y-6" action="#" method="POST">
//                     <div>
//                         <label className="block text-sm font-medium leading-6 text-white-100">Username</label>
//                         <div className="mt-2">
//                             <input type="text" placeholder="Enter Username" className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
//                         </div>
//                     </div>

//                     <div>
//                         <div className="flex items-center justify-between">
//                         <label className="block text-sm font-medium leading-6 text-white-100">Password</label>
//                         </div>
//                         <div className="mt-2">
//                             <input type="password" placeholder="Enter Password" className="block w-full rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                             />
//                         </div>
//                     </div>

//                     <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">Don't have an account</a>

//                     <div>
//                         <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
//                         Login
//                         </button>
//                     </div>
//                 </form>

//             </div>
//         </div>