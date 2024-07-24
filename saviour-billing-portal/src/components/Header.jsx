import React from 'react'
import SaviourLogo from '../assets/SaviourLogo.jpg'

const Header = ({ onLogout,onHandleViewHome, onHandleViewClient, onHandleAddClient }) => {
    return (
        <header className='header bg-white'>
            <nav class="navbar pt-3">
                <div class="container-fluid justify-content-lg-end">
                    <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-start " tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
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
                    </div>
                    <button className="btn btn-danger" onClick={onLogout}>Logout</button>
                </div>
            </nav>
        </header>
    )
}

export default Header