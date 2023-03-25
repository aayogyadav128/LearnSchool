import React, { useState} from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {  Navigate, Route, Routes } from 'react-router-dom';
import Player from '../Components/Player';
import SearchFeed from '../Components/SearchFeed';
import Feed from '../Container/Feed';
import { Header } from '../Container/Header';
import Profile from '../Container/Profile';
import "../styles.css";
import { auth } from '../utils/firebase';




const Home = () => {
    const [theme, setTheme] = useState("Modern");
    let ChangeTheme = () => {
        var element = document.getElementById("nav");
        if (theme === "Modern") {
            document.body.id = 'white';
            element.classList.add("w-primary-navbar");
            element.classList.remove("primary-navbar");
            setTheme("Light");

        }

        else {
            document.body.id = 'modern';
            element.classList.add("primary-navbar");
            element.classList.remove("w-primary-navbar");
            setTheme("Modern");
        }
    };
    const [user] = useAuthState(auth);
    
    return (
        
        <div>
        {user? <Header themeData={ChangeTheme} currentTheme={theme} />: <Navigate to={'/login'} />}
        <Routes>
        
        <Route path='/' element={<Feed/>} />
        <Route path='/profile/*' element={<Profile />} />
        <Route path='/player/*' element={<Player />} />
        <Route path='/searchfeed/*' element={<SearchFeed />} />
        </Routes>
        </div>
        )
}

export default Home