import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import { getTokenFromResponse } from './spotify';

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
    spotify.setAccessToken(curr_token)
    }
  },[]);

  return (
    <div className="app">
    
    {
     token?
     <h1>hiiiii</h1>
     :
     <Login />}
    </div>
  );
}

export default App;
