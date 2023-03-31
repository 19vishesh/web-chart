import React from 'react'
import './dashRight.css'

import { BarChartOutlined, EyeOutlined, FireOutlined } from '@ant-design/icons'
import DemoScatter from '../graphs/BubbleChart'

const DashRight = ({ highExpenditure, lowExpenditure }) => {
    return (
        <div className='dashBoard__right'>

            {/* timeline */}
            <div className="dashBoard__right-timeline__title">
                timeline
            </div>
            <div className="dashBoard__right-timeline">
                <span>1W</span>
                <span>1M</span>
                <span>3M</span>
                <span>1Y</span>
                <span>All</span>
            </div>

            {/* Circle */}
            <div className="dashBoard__right-parent__circle">
                <div className="dashBoard__right-child__circle"></div>
            </div>

            {/* informers */}
            <div className="dashBoard__right-informer">
                <div className="dashBoard__right-informer__component trendGoods">
                    <FireOutlined style={{ fontSize: "25px", color: "black" }} />
                    <p>TREND GOODS</p>
                    <p className='number'>204</p>
                </div>
                <div className="dashBoard__right-informer__component shoppingViews">
                    <EyeOutlined style={{ fontSize: "25px", color: "black" }} />
                    <p>TREND GOODS</p>
                    <p className='number'>{highExpenditure}</p>
                    {/* {console.log(highExpenditure)} */}
                </div>
                <div className="dashBoard__right-informer__component storeDynamics">
                    <BarChartOutlined style={{ fontSize: "25px", color: "black" }} />
                    <p>TREND GOODS</p>
                    <p className='number'>{lowExpenditure}</p>
                </div>
            </div>

            <div className="bubbleChart" style={{position:"absolute", width:"70%"}}>
                <DemoScatter/>
            </div>

        </div>
    )
}

export default DashRight;