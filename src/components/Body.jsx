import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
border: 1px solid green;
height: 100vh;
flex: 80%;
background: linear-gradient(transparent, rgba(0, 0, 0, 1));
  background-color: rgb(179,0,179);
`
function Body() {
  return (
    <Container>Body</Container>
  )
}

export default Body