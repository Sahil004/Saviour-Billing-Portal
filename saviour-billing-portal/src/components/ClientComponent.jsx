import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createClient, getClient, updateClient } from '../services/ClientService';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

const ClientComponent = ({ onLogout }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({ name: '', email: '' })
    const navigator = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            getClient(id).then((response) => {
                setName(response.data.name);
                setEmail(response.data.email);
            }).catch(error => {
                console.error(error);
            })
        }
    }, [id])
    function saveOrUpdateClient(e) {
        e.preventDefault();
        if (validateForm()) {

            const client = { name, email }
            console.log(client);

            if (id) {
                updateClient(id, client).then((response) => {
                    console.log(response.data);
                    navigator('/clients')
                }).catch(error => {
                    console.error(error);
                })
            } else {
                createClient(client).then((response) => {
                    console.log(response.data);
                    navigator('/clients');
                }).catch(error => {
                    console.error(error);
                })
            }
        }
    }

    function validateForm() {
        let valid = true;
        const errorsCopy = { ...errors };

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

    function pageTitle() {
        if (id) {
            return <h2 className='text-center'>Update Client</h2>
        } else {
            return <h2 className='text-center'>Add Client</h2>
        }
    }
    return (
        <div className='container-fluid'>
            <div className='dashboard row'>

                <div className="d-none d-lg-block col-md-3 col-xl-2 col p-0">
                    <Sidebar />
                </div>
                <div className="col-12 col-lg-9 col-xl-10 p-0">
                    <Header onLogout={onLogout} />
                    <main className='container'>
                        <div className='main px-3 pt-3 px-lg-4 pt-lg-4'>
                            <div className='container add-client'>
                                <div className='row'>
                                    <div className="card">
                                        {
                                            pageTitle()
                                        }
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
                                                <button className='btn btn-success' onClick={saveOrUpdateClient}>Add Client</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default ClientComponent