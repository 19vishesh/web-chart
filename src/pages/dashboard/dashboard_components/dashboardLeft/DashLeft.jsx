import React from 'react'
import DemoRadialBar from './graphs/radialBar';
import DemoTinyArea from './graphs/TinyLineChart';
import './dashLeft.css'

const DashLeft = () => {

  return (
    <div className='dashBoard__left' >

      <div
       className="dashBoard__left-title">
        Design faster
      </div>

      <div className="dashBoard__left-circle__chart">

        <div className='circle__chart-radialChart'>
          <DemoRadialBar />
        </div>

        <div className='circle__chart-heading'>
          Total Earning
        </div>

        <div className='circle__chart-heading__number'>
          $12,875
        </div>

        <div className='circle__chart-heading__subHeading'>
          Compressed to $21,537 last year
        </div>


        <div className='circle__chart-lineChartSection'>
          <div className='circle__chart-lineChartSection__box'>
            <div className='circle__chart-lineChartSection__heading'>
              resentation
            </div>
            <div className="circle__chart-lineChartSection__amount">
              245
            </div>
            <div className="circle__chart-lineChartSection__lineChart">
              <DemoTinyArea />
            </div>
          </div>

          <div className='circle__chart-lineChartSection__box'>
            <div className='circle__chart-lineChartSection__heading'>
              resentation
            </div>
            <div className="circle__chart-lineChartSection__amount">
              245
            </div>
            <div className="circle__chart-lineChartSection__lineChart">
              <DemoTinyArea />
            </div>
          </div>

          <div className='circle__chart-lineChartSection__box'>
            <div className='circle__chart-lineChartSection__heading'>
              resentation
            </div>
            <div className="circle__chart-lineChartSection__amount">
              245
            </div>
            <div className="circle__chart-lineChartSection__lineChart">
              <DemoTinyArea />
            </div>
          </div>
        </div>


      </div>

      <div className="dashBoard__left-side-sales">
        {/* Box1 */}
        <div className='dashBoard__left-side-sales-box'>
          <div className="dashBoard__left-side-sales__heading">
            Total Earnings
          </div>
          <div className="dashBoard__left-side-sales__number">
            $12,875 <span className="increase">+10%</span>
          </div>
          <div className="dashBoard__left-side-sales__footerText">
            Compared to $21,490 last year
          </div>
        </div>

        {/* Box divider starts */}
        <div className="divider"></div>
        {/* Box divider ends */}

        {/* Box2 */}
        <div className='dashBoard__left-side-sales-box'>
          <div className="dashBoard__left-side-sales__heading">
            Sales
          </div>
          <div className="dashBoard__left-side-sales__number">
            $14,693 <span className="increase">+10%</span>
          </div>
          <div className="dashBoard__left-side-sales__footerText">
            Compared to $18,492 last year
          </div>
        </div>

      </div>

      <div className="dashBoard__left-miscellaneous">
        <div className="dashBoard__left-miscellaneous__box">
          <div className="miscellaneous__box-heading">Travel</div>
          <div className="miscellaneous__box-number">
            760
          </div>
          <div className="increase">2,540</div>
          <div className="increase__icon">+</div>
        </div>
        <div className="dashBoard__left-miscellaneous__box">
          <div className="miscellaneous__box-heading">Travel</div>
          <div className="miscellaneous__box-number">
            760
          </div>
          <div className="increase">2,540</div>
          <div className="increase__icon">+</div>
        </div>
        <div className="dashBoard__left-miscellaneous__box">
          <div className="miscellaneous__box-heading">Travel</div>
          <div className="miscellaneous__box-number">
            760
          </div>
          <div className="increase">2,540</div>
          <div className="increase__icon">+</div>
        </div>
      </div>

    </div>

  )
}

export default DashLeft;