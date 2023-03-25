import React, { useEffect, useState } from 'react';
import Courses from '../Container/Courses';
import { fetchSearchPlaylist } from '../utils/fetch';


const SearchFeed = () => {

const [playlist , setPlaylist] = useState([]);

const [search, setSearch] = useState('')
useEffect(()=>{
fetchSearchPlaylist(search).then((data)=>setPlaylist(data));
},[search]);
let prevToken = playlist.prevPageToken;
let nextToken = playlist.nextPageToken;
return (
    <div className="container mt-4 d-flex flex-column">
    <input value={search} onChange={(e)=>setSearch(e.target.value)} style={{marginBottom:'10px'} } placeholder="Search..."></input>
        <Courses courses={playlist.items} />
        <div className='d-flex flex-row'>
          <div style={prevToken===undefined ? {display:'none',}:null}><button onClick={()=>{fetchSearchPlaylist(search,prevToken).then((data)=>setPlaylist(data));}}>PrevPage</button></div>
          <div style={nextToken===undefined ? {display:'none',}:null}><button onClick={()=>{fetchSearchPlaylist(search,nextToken).then((data)=>setPlaylist(data));}}>NextPage</button></div>
        </div>
    </div>
  )
}

export default SearchFeed