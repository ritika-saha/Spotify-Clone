import React from 'react'
import styled from 'styled-components'
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import Slider from '@mui/material/Slider';


const Container=styled.div`
position: fixed;
bottom:0;
height: 79px;
width: 100%;
background-color: #330033;
padding: 20px;
color: white;
display:flex;
justify-content:space-between;
`

const Left=styled.div`
flex:0.3;
display:flex;
align-items:center;
color:white;
width:300px;
`

const Right=styled.div`
flex:0.3;
display:flex;
align-items:center;
justify-content: space-between;
color:white;
`

const Center=styled.div`
flex:0.4;
padding:0 100px;
display:flex;
align-items:center;
justify-content:space-between;

&:hover{
  cursor:pointer;
}
`
const Album=styled.img`
margin-right:20px;
height:50px;
width:50px;
object-fit:contain;
`

const SongInfo=styled.div``

const Singer=styled.p`
font-size:12px;
`
const Song=styled.h4`
margin-bottom:5px;
`
function Footer() {
  return (
    <Container>

      <Left>
          <Album src="https://ipurple.eu/1497-large_default/bts-map-of-the-soul-7.jpg"/>
          <SongInfo>
            <Song>Black Swan</Song>
            <Singer>BTS</Singer>
          </SongInfo>
      </Left>

      <Center>
        <ShuffleIcon sx={{color:"#ff99ff"}}/>
        <SkipPreviousIcon />
        <PlayCircleOutlineIcon fontSize="large"/>
         <SkipNextIcon/>
         <RepeatIcon sx={{color:"#ff99ff"}}/>
      </Center>

      <Right>
          <PlaylistPlayIcon/>
          <VolumeDownIcon/>
         <Slider size="small"
  defaultValue={50}
  aria-label="Small"
  valueLabelDisplay="auto"
  sx={{color:"#ff99ff"}}
  />
      </Right>

    </Container>
  )
}

export default Footer