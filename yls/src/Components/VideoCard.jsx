import React, {  useState } from 'react';

const VideoCard = ({data,cVId,playingVideo}) => {
  let Vdata=data;
  let vid=Vdata?.snippet?.resourceId?.videoId
  let PlayingVideo = 'https://www.youtube.com/watch?v='+vid

  const [selected, isSelected] = useState()
  return (
    
    <div  onClick={()=>{cVId('https://www.youtube.com/watch?v='+vid);isSelected(vid)}} style={selected===vid ? {opacity:'0.4'} : null} className="v-l-card m-2 row " id="row">
    <div className="col" ><img className="v-l-image img-fluid rounded-start" src={Vdata?.snippet?.thumbnails?.high?.url} alt="..." /></div>
     
     <div className="col overflow">{playingVideo===PlayingVideo? <div style={{backgroundColor:'red',width:'10px',height:'10px',borderRadius:'50%'}}></div> : null }{Vdata?.snippet?.title}</div>
     </div>
    
  )
}

export default VideoCard