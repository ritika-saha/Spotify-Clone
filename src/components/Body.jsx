import React from 'react'
import styled from 'styled-components'
import BodyHeader from './BodyHeader'

const Container=styled.div`
height: 100vh;
flex: 80%;
background: linear-gradient(transparent, rgba(0, 0, 0, 1));
  background-color: rgb(179,0,179);
  color:white;
  padding:30px;
`
function Body({spotify}) {
  return (
    <Container>
      <BodyHeader spotify={spotify}/>
    </Container>
  )
}

export default Body