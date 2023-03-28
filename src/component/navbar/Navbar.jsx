import React from 'react'
import { Input } from 'antd';
import logo from './logo.png'
import { UserOutlined, UnorderedListOutlined } from '@ant-design/icons'

const Navbar = () => {
  return (
    <div className='navbar' style={{display:"flex" ,height:"3rem", display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>
      <div className="logo" style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <img src={logo} alt="logo" style={{height:"2.3rem", padding:"0.5rem"}}/>
        <p>WASSERSTOFF</p>
      </div>
      <Input placeholder="Basic usage" style={{ width: "30%", height: "2.3rem", background:"#EEF0FA" }} />
      <p>Statistics</p>
      <p>Overview</p>
      <p>Dashboard</p>
      <p>Analytics</p>
      <UserOutlined style={{ fontSize: '30px', color: "#A1A3D4" }} />
      <UnorderedListOutlined style={{ fontSize: '30px', color: "#A1A3D4" }} />
    </div>
  )
}

export default Navbar