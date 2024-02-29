import LoginPage from './components/loginPage.js';
import './App.css';
import SignUpPage from './components/signUp.js';
import HomePage from './components/homePage.js';
import {Routes, Route, Navigate} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import { useAuthContext } from './components/context/AuthContext.js';

function App() {
  const { authUser } = useAuthContext();
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={ authUser ? <HomePage /> : <Navigate to='/login' />}/>
        <Route path='/signup' element={ authUser ? <Navigate to='/' /> : <SignUpPage/> }/>
        <Route path='/login' element={ authUser ? <Navigate to='/' /> : <LoginPage/> }/>
      </Routes>
      <Toaster/>
    </div>
  
  );
}

export default App;
