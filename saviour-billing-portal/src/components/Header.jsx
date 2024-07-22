import React from 'react'
import SaviourLogo from '../assets/SaviourLogo.jpg'
const HeaderComponent = ({onLogout}) => {
    return (
        <div>
            <header className='header'>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container">
                        <a className="navbar-brand" href="#"><img src={SaviourLogo}/></a>
                        <button className="btn btn-danger" onClick={onLogout}>Logout</button>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                    </div>
                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent