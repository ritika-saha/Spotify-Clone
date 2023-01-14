import { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import Login from './components/Login';
import Player from './components/Player';
import { getTokenFromResponse } from './spotify';
import { useDataLayerValue } from './DataLayer';

const spotify=new SpotifyWebApi();
function App() {
 // const [token,setToken]=useState(null);
  const [{ token }, dispatch]=useDataLayerValue();

  useEffect(()=>{
    const hash=getTokenFromResponse();
    //clearing access token for security reasons
    //console.log(hash)
    window.location.hash="";
    const curr_token=hash.access_token;
    if(curr_token){
    //setToken(curr_token);
    dispatch({
      type: 'SET_TOKEN',
      token: curr_token,
    });
    spotify.setAccessToken(curr_token);
     spotify.getMe().then((user)=>{
      
      dispatch({
        type: 'SET_USER',
        user: user,
      });
    });
    }
  },[]);

 // console.log("💋",user)
  //console.log('👀', token)
  return (
    <div className="app">
    
    {
     token?
     <Player spotify={spotify}/>
     :
     <Login />}
    </div>
  );
}

export default App;
