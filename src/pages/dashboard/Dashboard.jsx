import React from 'react'

import "./dashboard.css"
import DashRight from './dashboard_components/DashRight';
import DashLeft from './dashboard_components/DashLeft';

const Dashboard = () => {
  return (
      <div className='dashBoard'>
          <DashRight/>
          <DashLeft/>
          
    </div>
  )
}

export default Dashboard;