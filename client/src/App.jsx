
import './App.css'
import Home from './pages/Home';
import SignUp from './pages/Signup';
import SignIn from './pages/Signin';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return <BrowserRouter>
    <Header/>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>

  </BrowserRouter>
}