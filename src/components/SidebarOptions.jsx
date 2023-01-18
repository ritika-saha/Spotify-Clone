import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
display : flex;
align-items: center;
color: grey;
height:35px;
cursor:pointer;
transition: 200ms color ease-in;
&:hover{
    color:white;
}
`
const IconContainer=styled.div`
margin-right: 30px;
margin-left:10px;
`

function SidebarOptions({title,Icon}) {
  return (
    <Container>
      <IconContainer>
      <Icon />
      </IconContainer>
            
            <p>{title}</p>
    </Container>
  )
}

export default SidebarOptions