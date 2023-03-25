import React from 'react';
import {LogoGroup ,HeaderButtons} from "../Components";

export const Header = (props) => {

  return (
    <div>
    <nav>
      <div className='d-flex justify-content-between primary-navbar' id='nav'>
        <LogoGroup />
        
        <HeaderButtons themeData={props.themeData}/>
      </div>
    </nav>
    </div>
  )
}

