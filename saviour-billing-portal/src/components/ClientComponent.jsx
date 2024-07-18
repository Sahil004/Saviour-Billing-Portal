import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createClient } from '../services/ClientService';

const ClientComponent = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigator = useNavigate();

    const [errors, setErrors] = useState({ name: '', email: '' })
    function saveClient(e) {
        e.preventDefault();
        if (validateForm()) {
            const client = { name, email }
            console.log(client);

            createClient(client).then((response) => {
                console.log(response.data);
                navigator('/clients');
            })
        }
    }

    function validateForm() {
        let valid = true;
        const errorsCopy = {...errors};

        if (name.trim()) {
            errorsCopy.name = "";
        } else {
            errorsCopy.name = "Client name is Required";
            valid = false;
        }

        if (email.trim()) {
            errorsCopy.email = "";
        } else {
            errorsCopy.email = "Client email is Required";
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
    }
    return (

        <div className='container my-5'>
            <div className='row'>
                <div className="card col-md-6 offset-md-3">
                    <h2 className='text-center'>Add Client</h2>
                    <div className="card-body">
                        <form action="">
                            <div className='form-group mb-2'>
                                <label htmlFor="name" className='form-label'>Client Name</label>
                                <input type="text" name="name" id="name" placeholder='Client Name' value={name} 
                                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                    onChange={(e) => setName(e.target.value)}>
                                </input>
                                {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label htmlFor="email" className='form-label'>Client Email</label>
                                <input type="text" name="email" id="email" placeholder='Client Email' value={email} className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    onChange={(e) => setEmail(e.target.value)}>
                                </input>
                                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                            </div>
                            <button className='btn btn-success' onClick={saveClient}>Add Client</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientComponent