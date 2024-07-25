import React from 'react';
import SaviourLogo from '../assets/SaviourLogo.jpg';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside id='sidebar' className='sidebar border-right'>
      <div className='sidebar-title'>
        <div className='sidebar-brand w-75 pt-2 ps-2'>
          <img src={SaviourLogo} alt='Saviour Technologies' />
        </div>
      </div>
      <ul className='sidebar-body list-group px-3 list-unstyled'>
        <span className='fw-bold py-3'>Dashboard</span>
        <li className="li-border">
        <Link className='dashboard-item list-group-item list-group-item-action' to="/dashboard">
          <i className="bi bi-laptop me-3"></i>
          Home
        </Link>
        </li>
        <li className="li-border">
          <Link className='dashboard-item list-group-item list-group-item-action' to="/dashboard/services">
            <i className="bi bi-bag me-3"></i>
            Services
          </Link>
        </li>
        <li className='li-border' data-bs-toggle='collapse'
          href='#clientSubmenu'
          role='button'
          aria-expanded='false'
          aria-controls='clientSubmenu'>
          <Link className='dashboard-item list-group-item list-group-item-action'>
            <i className="bi bi-people me-3"></i>Client
          </Link>
        </li>
        <ul className='collapse sub-list ps-5' id='clientSubmenu' style={{ listStyleType: 'disc' }}>
        <li>
            <Link className='dashboard-sub-item list-group-item list-group-item-action fw-semibold' to="/dashboard/add-client">
              Add
            </Link>
          </li>
          <li>
            <Link className='dashboard-sub-item list-group-item list-group-item-action fw-semibold' to="/dashboard/client-list">
              List
            </Link>
          </li>
        </ul>
        <li className='li-border' data-bs-toggle='collapse'
          href='#invoiceSubmenu'
          role='button'
          aria-expanded='false'
          aria-controls='invoiceSubmenu'>
          <Link className='dashboard-item list-group-item list-group-item-action'>
            <i className="bi bi-receipt-cutoff me-3"></i>Invoice
          </Link>
        </li>
        <ul className='collapse sub-list ps-5' id='invoiceSubmenu' style={{ listStyleType: 'disc' }}>
          <li>
            <Link className='dashboard-sub-item list-group-item list-group-item-action fw-semibold' to="/dashboard/create-invoice">
              Create
            </Link>
          </li>
          <li>
            <Link className='dashboard-sub-item list-group-item list-group-item-action fw-semibold' to="/dashboard/invoice-list">
              List
            </Link>
          </li>
        </ul>
      </ul>
    </aside>
  );
}

export default Sidebar;
