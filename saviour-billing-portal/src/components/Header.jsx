import React from 'react'

const Header = ({ onLogout }) => {
    return (
        <header className='header bg-white'>
            <nav className="navbar py-4">
                <div className="container">
                    <div className="navbar-brand"></div>
                    <button className="btn btn-danger" onClick={onLogout}>Logout</button>
                </div>
            </nav>
        </header>
    )
}

export default Header