import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
position: fixed;
bottom:0;
height: 65px;
width: 100%;
background-color: #330033;
padding: 20px;
color: white;
`
function Footer() {
  return (
    <Container>Footer</Container>
  )
}

export default Footer