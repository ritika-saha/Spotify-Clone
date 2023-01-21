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

const Left=styled.div``

const Right=styled.div``

const Center=styled.div``

function Footer() {
  return (
    <Container>
      
      <Left>
          <p>Song album</p>
      </Left>

      <Center>
          <p>player controls</p>
      </Center>

      <Right>
          <p>volume controls</p>
      </Right>

    </Container>
  )
}

export default Footer