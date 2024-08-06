import React from 'react';
import SaviourLogo from '../assets/SaviourLogo.jpg';
import SidebarItems from './SidebarItems';

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
                            <SidebarItems/>
                        </div>
                    </div>

                    <a className="btn text-danger ms-auto" title="Log out" onClick={onLogout}><i className="fi fi-rs-log-out fs-5"></i></a>
                </div>
            </nav>
        </header>
    );
}

export default Header;
