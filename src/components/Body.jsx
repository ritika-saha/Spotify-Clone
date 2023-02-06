import React from 'react'
import styled from 'styled-components'
import BodyHeader from './BodyHeader'
import { useDataLayerValue } from '../DataLayer'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow';

const Container=styled.div`
height: 100vh;
flex: 80%;
background: linear-gradient(transparent, rgba(0, 0, 0, 1));
  background-color: rgb(179,0,179);
  color:white;
  padding:30px;
  overflow-y:overlay;
`

const BodyInfo=styled.div`
display:flex;
align-items:flex-end;
padding:10px;
`

const DiscoverImg=styled.img`
height:25vh;
margin:0 20px;
box-shadow:0 4px 60px rgba(0,0,0,0.5);
`

const BodyInfoText=styled.div`
flex:1;
`

const InfoTextHeading=styled.h2`
font-size:50px;
margin-bottom:10px;
`

const InfoTextDesc=styled.p`
font-size:14px;
`

const BodyIcons=styled.div`
display:flex;
align-items:center;
&:hover{
  cursor:pointer;
}
`

const BodySongs=styled.div`
margin:20px -30px;
`
function Body({spotify}) {
  const [{discover_weekly},dispatch]=useDataLayerValue();
  return (
    <Container>
      <BodyHeader spotify={spotify}/>
      <BodyInfo>
          <DiscoverImg src="https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/mm8fMkXMqua-juocD6v9OFAFXMUhQMPUhrd1q3oF4OT3XHThlfj_NsodcNc-HDo2T_dZ-2vwZV5GWQOrIFuqo4efYCvJgYGohsXphIi8rE4=/NDI6MTU6MjJUMzAtOTAtMQ=="/>
          <BodyInfoText>
            <strong>PLAYLIST</strong>
            <InfoTextHeading>Discover Weekly</InfoTextHeading>
            <InfoTextDesc>{discover_weekly?.description}</InfoTextDesc>
          </BodyInfoText>
      </BodyInfo>

      <BodySongs>
          <BodyIcons>
              <PlayCircleIcon sx={{mr:"20px",ml:"28px"}} fontSize="large"/>
              <FavoriteBorderIcon sx={{mr:"20px"}}/>
              <MoreHorizIcon sx={{mr:"20px"}}/>
          </BodyIcons>
      </BodySongs>
      {discover_weekly?.tracks?.items?.map((item)=>
       <SongRow track={item?.track}/>
      )}
    </Container>
  )
}

export default Body