import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Settings } from '../Components'
import Support from '../Components/Support';
import { outSign } from '../utils/firebase';

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div style={{width:'100%'}} className="row" id="row-fix">
  <div className="col-3 side-nav-bar">
    <div onClick={()=> navigate(-1)} className="side-buttons">Go Back</div>
    <div onClick={()=>navigate('/')} className="side-buttons">Home</div>
    <div onClick={()=>navigate('settings')} className="side-buttons">Settings</div>
    <div onClick={()=>navigate('support')} className="side-buttons">Support</div>
    <div onClick={outSign} className="side-buttons">Logout</div>
  </div>
  <div className="col">
    <Routes>
        <Route path='/settings' element={<Settings />} />
        <Route path='/support' element={<Support />} />
    </Routes>
  </div>
</div>
  )
}

export default Profile