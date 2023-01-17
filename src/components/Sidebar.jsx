import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
border: 1px solid black;
height: 100vh;
flex: 20%;
background-color:#1a001a;
color:white;
min-width: 230px;
`
function Sidebar() {
  return (
        <Container>Sidebar</Container>
  )
}

export default Sidebar