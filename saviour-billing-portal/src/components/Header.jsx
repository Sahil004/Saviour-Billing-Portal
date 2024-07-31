import React from 'react';
import SaviourLogo from '../assets/SaviourLogo.jpg';
import { Link } from 'react-router-dom';

const Header = ({ onLogout }) => {
    return (
        <header className='header bg-white'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-start d-lg-none" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header d-flex">
                            <h5 className="offcanvas-title col-8" id="offcanvasDarkNavbarLabel">
                                <div className='sidebar-brand'>
                                    <img src={SaviourLogo} alt='Saviour Technologies' className='img-fluid' />
                                </div>
                            </h5>
                            <button type="button" className="btn-close text-reset col-4 ms-3" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className='sidebar-body list-group px-3 list-unstyled'>
                                <span className='fw-bold py-3'>Dashboard</span>
                                <li className="li-border">
                                    <Link className='dashboard-item list-group-item list-group-item-action' to="/dashboard">
                                        <i className="bi bi-laptop me-3"></i>
                                        Home
                                    </Link>
                                </li>
                                <li className='li-border' data-bs-toggle='collapse'
                                    href='#servicesSubmenu'
                                    role='button'
                                    aria-expanded='false'
                                    aria-controls='invoiceSubmenu'>
                                    <Link className='dashboard-item list-group-item list-group-item-action'>
                                        <i className="bi bi-receipt-cutoff me-3"></i>Services
                                    </Link>
                                </li>
                                <ul className='collapse sub-list ps-5' id='servicesSubmenu' style={{ listStyleType: 'disc' }}>
                                    <li>
                                        <Link className='dashboard-sub-item list-group-item list-group-item-action fw-medium' to="/dashboard/services/create-service">
                                            Create
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='dashboard-sub-item list-group-item list-group-item-action fw-medium' to="/dashboard/services/services-list">
                                            List
                                        </Link>
                                    </li>
                                </ul>
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
                                        <Link className='dashboard-sub-item list-group-item list-group-item-action fw-medium' to="/dashboard/clients/add-client">
                                            Add
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='dashboard-sub-item list-group-item list-group-item-action fw-medium' to="/dashboard/clients/client-list">
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
                                        <Link className='dashboard-sub-item list-group-item list-group-item-action fw-medium' to="/dashboard/invoice/create-invoice">
                                            Create
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='dashboard-sub-item list-group-item list-group-item-action fw-medium' to="/dashboard/invoice-list">
                                            List
                                        </Link>
                                    </li>
                                </ul>
                            </ul>
                        </div>
                    </div>

                    <a className="btn text-danger ms-auto" title="Log out" onClick={onLogout}><i className="fi fi-rs-log-out fs-5"></i></a>
                </div>
            </nav>
        </header>
    );
}

export default Header;
