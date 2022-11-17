import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePic from "../assets/D-M.png"
import SearchBar from './SearchBar';

const HeaderButtons = (props) => {
  return (
    <div className="d-flex ">
    <SearchBar />
    <div className="mt-1 ">
    <label className="switch mx-3 mgn">
      <input type="checkbox" onClick={props.themeData}/>
      <span className="slider round"></span>
    </label>
    </div>
    <Link to={'/profile'}><input type="image" className="profile-pic"
     src={ProfilePic} alt="profile-pic" /></Link>
  </div>
  )
}

export default HeaderButtons