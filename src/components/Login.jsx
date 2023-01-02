import React from 'react'
import styled from 'styled-components'

const Container=styled.div`

`

const Image=styled.img``

const Button=styled.button``
function Login() {
  return (
    <Container>
        <Image src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" />
        <Button>Login with Spotify</Button>
    </Container>
  )
}

export default Login