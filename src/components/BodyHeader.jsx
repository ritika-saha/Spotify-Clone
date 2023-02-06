import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import { useDataLayerValue } from '../DataLayer'


const Container=styled.div`
display:flex;
justify-content:space-between;
margin-bottom:30px;
`
const HeaderLeft=styled.div`
display:flex;
align-items:center;
background-color:white;
color:grey;
border-radius:30px;
padding:10px;
flex:0.5;
`

const Input=styled.input`
border:none;
width:100%;
`
const HeaderRight=styled.div`
display:flex;
align-items:center;
`
const Name=styled.h4`
margin-left:10px;
`
function BodyHeader() {
  const [{user}]=useDataLayerValue();
  return (
    <Container>
         <HeaderLeft>
                <SearchIcon/>
                <Input placeholder='Your fav song is one search away !' type='text' />
         </HeaderLeft>
        <HeaderRight>
        <Avatar  src={user?.images[0]?.url} alt={user?.display_name}/>
                <Name>{user?.display_name}</Name>   
        </HeaderRight>
    </Container>
  )
}

export default BodyHeader