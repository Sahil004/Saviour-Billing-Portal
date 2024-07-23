import React, { useState } from 'react'
import { loginAdmin } from '../services/AdminService';
import '../assets/css/Login.css';
import logo from '../assets/logo.jpg';

const Login = ({onLogin}) => {

    const [adminEmail, setAdminEmail] = useState('');
    const [adminPassword, setAdminPassword] = useState('');
    const [error, setError] = useState('');

    function confirmLogin(event) {
        event.preventDefault();
        setError('');
        const login = { adminEmail, adminPassword }
        loginAdmin(login).then((response) => {
            console.log(response.data);
            console.log(response.data.message);
            if (response.data.message === "Email Not exist") {
                setError("Email Not exist");
            } else if (response.data.message === "Login Success") {
                onLogin();
            } else {
                setError("Wrong Password");
            }
        }).catch(error => {
            console.log(error);
        })

    }

    return (
        <div className="signin">
            <div className="container">
                <div className="row vh-100 justify-content-center align-items-center">
                    <div className="card shadow-sm col-md-8 col-xl-4 p-4">
                        <div className="logo mx-auto">
                            <img src={logo} alt="saviour" />
                        </div>
                        <h4 className="text-center mb-5">Sign in</h4>

                        <form onSubmit={confirmLogin}>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="adminEmail"
                                    placeholder="Email Address *"
                                    value={adminEmail}
                                    onChange={(e) => setAdminEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="adminPassword"
                                    placeholder="Password *"
                                    value={adminPassword}
                                    onChange={(e) => setAdminPassword(e.target.value)}
                                    required
                                />
                            </div>
                            {error && <div className="alert alert-danger">{error}</div>}
                            <button type="submit" className="btn btn-primary w-100 mt-3 text-uppercase fw-semibold">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login