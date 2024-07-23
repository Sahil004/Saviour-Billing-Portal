import React from 'react'
import SaviourLogo from '../assets/SaviourLogo.jpg'

const Sidebar = ({ onHandleViewHome, onHandleViewClient, onHandleAddClient }) => {


  return (
    <aside id='sidebar' className='sidebar'>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <img src={SaviourLogo} alt='Saviour Technologies' />
        </div>
      </div>
      <ul className='sidebar-body list-group px-3'><span className='fw-bold py-3'> Dashboard</span>
        <li className='dashboard-item list-group-item list-group-item-action '>
          <a onClick={onHandleViewHome}>Home</a>
        </li>
        <li className='dashboard-item list-group-item list-group-item-action'>
          <a onClick={onHandleViewHome}>Services</a>
        </li>
        <li className='dashboard-item list-group-item list-group-item-action'>
          <a onClick={onHandleViewHome}>Client</a>
        </li>
        <li className='dashboard-item list-group-item list-group-item-action'>
          <a onClick={onHandleViewHome}>Invioce</a>
        </li>
      </ul>
      <ul className=' flex-column'>
        <a onClick={onHandleViewClient}>View Client</a>
        <a onClick={onHandleAddClient}>Add Client</a>
      </ul>
    </aside>
  )
}

export default Sidebar