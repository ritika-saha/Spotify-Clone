import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
height: 100vh;
flex: 80%;
background: linear-gradient(transparent, rgba(0, 0, 0, 1));
  background-color: rgb(179,0,179);
  color:white;
  padding:30px;
`
function Body() {
  return (
    <Container>Body</Container>
  )
}

export default Body