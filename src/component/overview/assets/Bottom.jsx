import React from 'react'

const Bottom = () => {
  return (
    <div className='overView__bottom' style={{
      background: "orange", width: "100%", height: "10vh", display: "flex",
    justifyContent:'space-between'}}>
      <div className="bottom__salesNumber">
        salesData
      </div>
      <div className="bottom__barChart">
        BarChart
      </div>
    </div>
  )
}

export default Bottom