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
                            <ul className='sidebar-body list-group px-3'>
                                <span className='fw-bold py-3'>Dashboard</span>
                                <Link className='dashboard-item list-group-item list-group-item-action' to="/dashboard">
                                    <i className="bi bi-laptop me-3"></i>
                                    Home
                                </Link>
                                <Link className='dashboard-item list-group-item list-group-item-action' to="/dashboard/services">
                                    <i className="bi bi-bag me-3"></i>
                                    Services
                                </Link>
                                <li className='dashboard-item list-group-item list-group-item-action' data-bs-toggle='collapse'
                                    href='#clientSubmenu'
                                    role='button'
                                    aria-expanded='false'
                                    aria-controls='clientSubmenu'>
                                    <i className="bi bi-people me-3"></i>Client
                                </li>
                                <ul className='collapse sub-list list-group' id='clientSubmenu'>
                                    <Link className='dashboard-item list-group-item list-group-item-action' to="/dashboard/addClient">
                                        Add Client
                                    </Link>
                                    <Link className='dashboard-item list-group-item list-group-item-action' to="/dashboard/viewClient">
                                        View Client
                                    </Link>
                                </ul>
                                <Link className='dashboard-item list-group-item list-group-item-action' to="/dashboard/invoice">
                                    <i className="bi bi-receipt-cutoff me-3"></i>
                                    Invoice
                                </Link>
                            </ul>
                        </div>
                    </div>

                    <button className="btn btn-danger ms-auto" onClick={onLogout}>Logout</button>
                </div>
            </nav>
        </header>
    );
}

export default Header;
