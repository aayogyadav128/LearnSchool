import React, { } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Container/Home';
import Login from './Container/Login';
import PageNotFound from './Container/PageNotFound';


const App = () => {
  
  return (
    <BrowserRouter>
    <Routes>
        
        <Route path='*' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/404' element={<PageNotFound />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App