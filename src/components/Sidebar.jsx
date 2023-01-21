import React from 'react'
import styled from 'styled-components'
import SidebarOptions from './SidebarOptions'
import { Home, LibraryBooks, Search } from '@mui/icons-material'
import { useDataLayerValue } from '../DataLayer'

const Container=styled.div`
height: 100vh;
flex: 20%;
background-color:#0a000a;
color:white;
min-width: 240px;
padding-left: 10px;
padding-right:10px;
`
const Image=styled.img`
height: 60px;
padding:10px;
margin-right: auto;
`

const Title=styled.strong`
margin-left:10px;
padding: 5px;
font-size: 12px;
`
const Separator=styled.hr`
border: 1px solid #282828;
width: 90%;
margin: 10px auto;
`


function Sidebar() {
  const [{playlists}]=useDataLayerValue();
  return (
        <Container>
          <Image src="https://www.pngkey.com/png/full/190-1907978_spotify-logo-png-white-spotify-logo-white-transparent.png"></Image>
          <SidebarOptions title="Home" Icon={Home}/>
          <SidebarOptions title="Search" Icon={Search}/>
          <SidebarOptions title="Your Library" Icon={LibraryBooks}/>
          <br/>
          <Title>Playlists</Title>
          <Separator />

          {playlists?.items.map((playlist)=>(<SidebarOptions title={playlist.name}/>))}
          
          

          
        </Container>
  )
}

export default Sidebar