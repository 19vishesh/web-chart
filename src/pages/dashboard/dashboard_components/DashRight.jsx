import React from 'react'
import './dashRight.css'

import { BarChartOutlined, EyeOutlined, FireOutlined } from '@ant-design/icons'

const DashRight = () => {
    return (
        <div className='dashBoard__right'>

            {/* timeline */}
            <div className="dashBoard__right-timeline">
                
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
                    <p className='number'>65,540</p>
                </div>
                <div className="dashBoard__right-informer__component storeDynamics">
                    <BarChartOutlined style={{ fontSize: "25px", color: "black" }} />
                    <p>TREND GOODS</p>
                    <p className='number'>204</p>
                </div>
            </div>

        </div>
    )
}

export default DashRight;