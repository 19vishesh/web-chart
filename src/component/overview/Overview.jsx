import React from 'react'
import Bottom from './assets/Bottom'
import Left from './assets/Left'
import Right from './assets/Right'

const Overview = () => {
  return (
      <div style={{background:"grey"}}>
          <div style={{display:"flex", justifyContent:"space-between"}}>
              <Left />
              <Right />
          </div>
            <Bottom/>
    </div>
  )
}

export default Overview;