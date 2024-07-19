import React, { useState } from 'react'
import { createAdmin } from '../services/AdminService';

const Register = () => {

    const [adminUsername, setAdminUsername] = useState("");
    const [adminContact, setAdminContact] = useState("");
    const [adminEmail, setAdminEmail] = useState("");
    const [adminPassword, setAdminPassword] = useState("");

    function save(event) {
        event.preventDefault();
        const admin = {adminUsername, adminContact, adminEmail, adminPassword}
        createAdmin(admin).then((response) => {
            console.log(response.data);
            alert("Admin Registered Successfully");
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
            <div className='container mt-4'>
                <div className="card col-md-6 offset-md-3">
                    <h1>Admin Registration</h1>
                    <div className="card-body">
                    <form action="">
                        <div className="form-group mb-2">
                            <label className="form-label">
                                Admin Username
                            </label>
                            <input type="text" className="form-control" id="adminUsername" placeholder='Enter Username'
                                value={adminUsername}
                                onChange={(event) => { setAdminUsername(event.target.value) }}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">
                                Admin Contact
                            </label>
                            <input type="text" className="form-control" id="adminContact" placeholder='Enter Contact Number'
                                value={adminContact}
                                onChange={(event) => { setAdminContact(event.target.value) }}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">
                                Admin Email
                            </label>
                            <input type="email" className="form-control" id="adminEmail" placeholder='Enter Email'
                                value={adminEmail}
                                onChange={(event) => { setAdminEmail(event.target.value) }}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label">
                                Admin password
                            </label>
                            <input type="password" className="form-control" id="adminPassword" placeholder='Enter Password'
                                value={adminPassword}
                                onChange={(event) => { setAdminPassword(event.target.value) }}
                            />
                        </div>
                        <button type='submit' className='btn btn-success mt-4' onClick={save}> Save </button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register