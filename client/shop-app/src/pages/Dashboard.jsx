import React from 'react'
import userIcon from '../public/images/user-icon.png'
import { Link, Outlet } from "react-router-dom";
import DashboardContent from '../components/DashboardContent';
import UserProfile from './dashboard/menu/UserProfile';
export const Dashboard = () => {
  return (
    <div className="ud-container">
      <div className='ud-control-menu'>
        <div className='ud-greeting'>
          <div className='ud-user-icon'>
            <img src={userIcon} alt="user-icon" /></div>
          <div className='ud-welcome-msg'>Hello, ABC</div>
        </div>
        <div className='ud-control-menu-items'>
          <div className='ud-control-line-item'>
          <Link className="ud-orders" to="orders"><span>Orders</span></Link>
          <Link className="ud-orders" to="address"><span>Address</span></Link>
          </div>
        </div>
      </div>
      <div className='ud-control-frame'>
        {/* Default Frame */}
       
        {/* Dynamic Control frame  */}
        <DashboardContent/>
        <Outlet/>
      </div>

    </div>
  )
}
