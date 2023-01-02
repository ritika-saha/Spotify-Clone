import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
 display: grid;
 align-items: centre;
 justify-content: center;
 place-items: center;
 background-color: black;
 width: 100%;
 height: 100vh;
`

const Image=styled.img`
  width: 100%;
  padding:0 15%;

`

const Butn=styled.a`
  color:white;
  padding: 20px;
  width: 200px;
  height: 60px;
  background-color: purple;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 99px;
  text-decoration: none;
  font-weight:600;

`
function Login() {
  return (
    <Container>
        <Image src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" />
        <Butn>Login with Spotify</Butn>
    </Container>
  )
}

export default Login