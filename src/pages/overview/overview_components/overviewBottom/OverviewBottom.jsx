import React from 'react'
import DemoColumn from '../graphs/BarChart';

import './overviewBottom.css'

const OverviewBottom = () => {
  return (
    <div className='overView__bottom' >
      <div className="bottom__salesNumber">
        <p>salesData</p>
      </div>
      <div className="bottom__barChart">
        {/* <DemoColumn/> */}
       
      </div>
    </div>
  )
}

export default OverviewBottom;