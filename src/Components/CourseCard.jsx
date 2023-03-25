import React from 'react';
import {Link} from 'react-router-dom';

const CourseCard = (datas) => {
  let data = {}
  let data1={...data,...datas};
  
  let PID = (data1?.datas?.id?.playlistId===undefined) ?  data1?.datas?.id : data1?.datas?.id?.playlistId ;
  
  return (
    <Link to={PID? `/player/${PID}`:'/404'} style={{textDecoration:'none',}}>
    <div className="card mb-3  " id="card-style">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={data1?.datas?.snippet?.thumbnails?.high?.url} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8 ">
          <div className="card-body h-100 d-flex flex-column justify-content-between">
            <div><h5 className="card-title">{data1?.datas?.snippet?.title}</h5></div>
            <div><p className="card-text cut-after-line-3">{data1?.datas?.snippet?.description}</p></div>
            <div><p className="card-text"><small className="text-muted">Published-{data1?.datas?.snippet?.publishedAt} </small></p></div>

          </div>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default CourseCard