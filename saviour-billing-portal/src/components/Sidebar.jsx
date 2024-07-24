import React from 'react'
import SaviourLogo from '../assets/SaviourLogo.jpg'
import { Link } from 'react-router-dom'

const Sidebar = ({ onHandleViewHome, onHandleViewClient, onHandleAddClient }) => {


  return (
    <aside id='sidebar' className='sidebar'>
      <div className='sidebar-title'>
        <div className='sidebar-brand w-75 pt-2 ps-2'>
          <img src={SaviourLogo} alt='Saviour Technologies' />
        </div>
      </div>
      <ul className='sidebar-body list-group px-3'><span className='fw-bold py-3'> Dashboard</span>
        <Link className='dashboard-item list-group-item list-group-item-action ' to="/dashboard">
          <i class="bi bi-laptop me-3"></i>
          <a onClick={onHandleViewHome}>Home</a>
        </Link>
        <li className='dashboard-item list-group-item list-group-item-action'>
          <i class="bi bi-bag me-3"></i>
          <a onClick={onHandleViewHome}>Services</a>
        </li>
        <li className='dashboard-item  list-group-item list-group-item-action' data-bs-toggle='collapse'
          href='#clientSubmenu'
          role='button'
          aria-expanded='false'
          aria-controls='clientSubmenu'>
          <i className="bi bi-people me-3"></i>Client
        </li>
        <ul className='collapse sub-list' id='clientSubmenu'>
          <Link className='dashboard-item list-group-item list-group-item-action' to="/dashboard/addClient">
            <a onClick={onHandleAddClient}>Add Client</a>
          </Link>
          <Link className='dashboard-item list-group-item list-group-item-action' to="/dashboard/viewClient">
            <a onClick={onHandleViewClient}>View Client</a>
          </Link>
        </ul>

        <li className='dashboard-item list-group-item list-group-item-action'>
          <i class="bi bi-receipt-cutoff me-3"></i>
          <a onClick={onHandleViewHome}>Invioce</a>
        </li>
      </ul>
    </aside >
  )
}

export default Sidebar