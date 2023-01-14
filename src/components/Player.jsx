import React from 'react'
import Body from './Body'
import Sidebar from './Sidebar'

function Player({spotify}) {
  return (
    <div>
        <BodyContainer>
          <Sidebar/>
          <Body/>
        </BodyContainer>
        {/*footer*/}
    </div>
  )
}

export default Player