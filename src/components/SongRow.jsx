import React from 'react'
import styled from 'styled-components'

const Songrow=styled.div`
margin-left:20px;
padding:20px;
display:flex;
align-items:center;
z-index:100;
color:white;
&:hover{
    cursor:pointer;
    background-color:black;
    opacity:0.8;
}
`
const SongAlbum=styled.img`
height:40px;
width:40px;
`
const SongrowInfo=styled.div`
margin-left:20px;

`
const TrackName=styled.h1`

font-size:16px;`
const TrackArtist=styled.p`
font-size:14px;
margin-top:3px;
color:grey;
`

function SongRow({track}) {
  return (
    <Songrow>
        <SongAlbum src={track?.album?.images[0]?.url}  />
        <SongrowInfo>
            <TrackName>{track?.name}</TrackName>
            <TrackArtist>{track?.artist?.map((artist)=>artist?.name).join(", ")}-{" "}{track?.album?.name}</TrackArtist>
        </SongrowInfo>
    </Songrow>
  )
}

export default SongRow