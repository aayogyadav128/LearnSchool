import React, { useEffect , useState} from 'react';
import { fetchPlaylistData } from '../utils/fetch';
import Courses from './Courses';

const Feed = () => {
  const [playlist , setPlaylist] = useState([]);
  useEffect(()=>{
  fetchPlaylistData().then((data)=>setPlaylist(data));
  },[]);
  let prevToken = playlist.prevPageToken;
  let nextToken = playlist.nextPageToken;
  return (
    <div className="container mt-4 d-flex flex-column justify-content-center">
        <Courses courses={playlist.items} />
        <div className='d-flex flex-row'>
          <div style={prevToken===undefined ? {display:'none',}:null}><button onClick={()=>{fetchPlaylistData(prevToken).then((data)=>setPlaylist(data));}}>PrevPage</button></div>
          <div style={nextToken===undefined ? {display:'none',}:null}><button onClick={()=>{fetchPlaylistData(nextToken).then((data)=>setPlaylist(data));}}>NextPage</button></div>
        </div>
    </div>
  )
}

export default Feed