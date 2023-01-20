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
margin-left:6px;
`
const Para=styled.p`
font-size: 14px;
margin-left: 13px;
`
function SidebarOptions({title,Icon}) {
  return (
    <Container>
      
        {Icon && 
        <IconContainer>
          <Icon />
        </IconContainer>
        }
      
            
            <Para>{title}</Para>
    </Container>
  )
}

export default SidebarOptions