import React from 'react'
import { Input } from 'antd';
import logo from './logo.png'
import { UserOutlined, UnorderedListOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src={logo} alt="logo" />
        <p>WASSERSTOFF</p>
      </div>
      <Input placeholder="Search" style={{ width: "30%", height: "1.8rem", background:"#EEF0FA" }} />
      <p><NavLink to="statistics">Statistics</NavLink></p>
      <p><NavLink to="/">Overview</NavLink></p>
      <p><NavLink to="dashboard">Dashboard</NavLink></p>
      <p><NavLink to="analytics">Analytics</NavLink></p>
      
      <UserOutlined style={{ fontSize: '25px', color: "#A1A3D4" }} />
      <UnorderedListOutlined style={{ fontSize: '25px', color: "#A1A3D4" }} />
    </div>
  )
}

export default Navbar