import { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import Login from './components/Login';
import Player from './components/Player';
import { getTokenFromResponse } from './spotify';

const spotify=new SpotifyWebApi();
function App() {
  const [token,setToken]=useState(null);
  useEffect(()=>{
    const hash=getTokenFromResponse();
    //clearing access token for security reasons
    //console.log(hash)
    window.location.hash="";
    const curr_token=hash.access_token;
    if(curr_token){
    setToken(curr_token);
    spotify.setAccessToken(curr_token);
    //---------checking is spotify is correctly configured------- spotify.getMe().then((user)=>{console.log(user)})
    }
  },[]);

  return (
    <div className="app">
    
    {
     token?
     <Player />
     :
     <Login />}
    </div>
  );
}

export default App;
