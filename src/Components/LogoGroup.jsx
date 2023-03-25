import React from 'react';
import Logo from "../assets/Logo.png";
import ProfilePic from "../assets/D-M.png"
import { Link } from 'react-router-dom';

const LogoGroup = () => {
  return (
    <div>
    <div className="d-flex">
    <Link to={'/'}>
    <input type="image" className="logo"
     src={Logo} alt="profile-pic" />
    </Link>
    </div>
    </div>
  )
}

export default LogoGroup