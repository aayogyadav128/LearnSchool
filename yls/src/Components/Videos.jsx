import React, {  useState } from 'react'
import VideoCard from './VideoCard';
import ReactPlayer from 'react-player/lazy';

const Videos = ({Videos}) => {
    let video = [];
    video = video.concat(Videos);
    let playlistIds = video[0]?.snippet?.playlistId;
    const [videoId, setVideoId] = useState('https://www.youtube.com/playlist?list='+playlistIds);
  return (
    <div>
    <div className='d-flex justigy-content-center player-height'>
    <ReactPlayer url={videoId} controls={true} style={{borderRadius:'20px',margin:'10px',}} width={'100%'} height={'100%'} /></div>
    <div className='tp'></div>
        {video.map((item,id)=>(
            <div key={id} >
                <VideoCard data={item} cVId={setVideoId} playingVideo={videoId}/>
            
            </div>
        ))}
        
    </div>
  )
}

export default Videos