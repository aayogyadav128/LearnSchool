import axios from "axios";


const BaseUrl='https://youtube.googleapis.com/youtube/v3/playlists';
const BaseUrl2='https://youtube.googleapis.com/youtube/v3/playlistItems';
const BaseUrl3='https://youtube.googleapis.com/youtube/v3/search?';


export const fetchPlaylistData = async (token) =>{
    let options = {params:{
    part:'snippet',
    channelId:process.env.React_App_Channel_Id,
    maxResults:25,
    pageToken:token,
    key:process.env.React_App_Api_Key
  }}
    const {data} = await axios.get(BaseUrl, options);
    return data;
  }

  export const fetchPlaylistvids = async (pid) =>{
    let options2 = {params:{
      part:'snippet',
      maxResults:50,
      playlistId:pid,
      key:process.env.React_App_Api_Key
    }}
    const {data} = await axios.get(BaseUrl2, options2);
    return data;
  }

  export const fetchSearchPlaylist = async (pid,token) =>{
    let options3 = {params:{
      part:'snippet',
      q:pid,
      maxResults:25,
      pageToken:token,
      type:'playlist',
      key:process.env.React_App_Api_Key
    }}
    const {data} = await axios.get(BaseUrl3, options3);
    return data;
  }