import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createClient, getClient, updateClient } from '../../services/ClientService';
import { useParams } from 'react-router-dom';

const AddClient = () => {

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
                    navigator('/dashboard/clients/client-list')
                }).catch((error) => {
                    if (error.response && error.response.status === 500) {
                        setErrors((prevErrors) => ({
                            ...prevErrors,
                            email: "Client email already exists",
                        }));
                    } else {
                        console.error(error);
                    }
                })
            } else {
                createClient(client).then((response) => {
                    console.log(response.data);
                    navigator('/dashboard/clients/client-list');
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

    function buttonTitle() {
        if (id) {
            return <button type='submit' className='btn btn-success'>Update</button>
        } else {
            return <button type='submit' className='btn btn-success' >Add</button>
        }
    }
    return (
        <div className='container add-client'>
            <div className='row'>
                <div className="card">
                    {
                        pageTitle()
                    }
                    <div className="card-body">
                        <form action="" className='dashboard-form' onSubmit={saveOrUpdateClient}>
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
                            {
                                buttonTitle()
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddClient