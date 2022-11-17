import React from 'react'
import { useNavigate } from 'react-router-dom';
import Search from '../assets/Search.png';

const SearchBar = () => {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/searchFeed`; 
    navigate(path);
  }
  

  return (
    <React.Fragment>
    <div onClick={routeChange} width={'10px'}><input style={{marginTop:'12px'}}  type="image" 
     src={Search} alt="Search" />
    </div>
    </React.Fragment>
  )
}

export default SearchBar