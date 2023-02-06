import React from 'react'
import Body from './Body'
import Sidebar from './Sidebar'
import styled from 'styled-components'
import Footer from './Footer'

const BodyContainer=styled.div`
  display: flex;
`
function Player({spotify}) {
  return (
    <div>
        <BodyContainer>
          <Sidebar/>
          <Body spotify={spotify}/>
        </BodyContainer>
        <Footer />
    </div>
  )
}

export default Player