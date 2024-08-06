import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createClient, getClient, updateClient } from '../../services/ClientService';
import { useParams } from 'react-router-dom';

const AddClient = () => {

    const [clientName, setClientName] = useState('');
    const [clientEmail, setClientEmail] = useState('');
    const [clientPhone, setClientPhone] = useState('');
    const [clientAddress, setClientAddress] = useState('');
    const [clientCompany, setClientCompany] = useState('');
    const [clientIndustry, setClientIndustry] = useState('');
    const [isUpdate, setIsUpdate] = useState(false);
    const [status, setStatus] = useState('');
    const [errors, setErrors] = useState({ clientName: '', clientEmail: '', clientPhone: '', clientAddress: '', clientCompany: '', clientIndustry: '' });
    const navigator = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            setIsUpdate(true);
            getClient(id).then((response) => {
                setClientName(response.data.clientName);
                setClientEmail(response.data.clientEmail);
                setClientPhone(response.data.clientPhone);
                setClientAddress(response.data.clientAddress);
                setClientCompany(response.data.clientCompany);
                setClientIndustry(response.data.clientIndustry);
                setStatus(response.data.status);
            }).catch(error => {
                console.error(error);
            })
        }
    }, [id])
    function saveOrUpdateClient(e) {
        e.preventDefault();
        if (validateForm()) {

            const client = { clientName, clientEmail, clientPhone, clientAddress, clientCompany, clientIndustry, status };
            console.log(client);

            if (id) {
                updateClient(id, client).then((response) => {
                    console.log(response.data);
                    alert('Client Updated Successfully!');
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
                    alert('Client Added Successfully!');
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

        if (clientName.trim()) {
            errorsCopy.clientName = "";
        } else {
            errorsCopy.clientName = "Client name is Required";
            valid = false;
        }

        if (clientEmail.trim()) {
            errorsCopy.clientEmail = "";
        } else {
            errorsCopy.clientEmail = "Client email is Required";
            valid = false;
        }

        if (clientPhone.trim()) {
            errorsCopy.clientPhone = "";
        } else {
            errorsCopy.clientPhone = "Client Phone is Required";
            valid = false;
        }

        if (clientAddress.trim()) {
            errorsCopy.clientAddress = "";
        } else {
            errorsCopy.clientAddress = "Client Address is Required";
            valid = false;
        }

        if (clientCompany.trim()) {
            errorsCopy.clientCompany = "";
        } else {
            errorsCopy.clientCompany = "Client Company is Required";
            valid = false;
        }

        if (clientIndustry.trim()) {
            errorsCopy.clientIndustry = "";
        } else {
            errorsCopy.clientIndustry = "Client Industry is Required";
        }

        setErrors(errorsCopy);

        return valid;
    }

    function handleInputChange(setValue, field, value) {
        setValue(value);
        setErrors(prevErrors => ({ ...prevErrors, [field]: '' }));
    }

    return (
        <div className='create-client bg-white rounded'>
            <div className="page-header">
                <h5 className="p-4 mb-0">{id ? 'Edit Client' : 'Add Client'}</h5>
            </div>
            <hr className='m-0' />
            <div className="page-body p-4">
                <form className="dashboard-form" onSubmit={saveOrUpdateClient}>
                    <div className="row form-section">
                        <div className="form-group col-md-6 col-lg-4 pb-3">
                            <label htmlFor="clientName">Client Name *</label>
                            <input
                                type='text'
                                id='clientName'
                                name='clientName'
                                value={clientName}
                                placeholder='e.g., James Walter'
                                className={`form-control rounded ${errors.clientName ? 'is-invalid' : ''}`}
                                onChange={(e) => handleInputChange(setClientName, 'clientName', e.target.value)}
                            />
                            {errors.clientName && <div className='invalid-feedback'>{errors.clientName}</div>}
                        </div>
                        <div className="form-group col-md-6 col-lg-4 pb-3">
                            <label htmlFor="clientEmail">Client Email *</label>
                            <input
                                type='email'
                                id='clientEmail'
                                name='clientEmail'
                                value={clientEmail}
                                placeholder='e.g., james01@xyz.co'
                                className={`form-control rounded ${errors.clientEmail ? 'is-invalid' : ''}`}
                                onChange={(e) => handleInputChange(setClientEmail, 'clientEmail', e.target.value)}
                            />
                            {errors.clientEmail && <div className='invalid-feedback'>{errors.clientEmail}</div>}
                        </div>
                        <div className="form-group col-md-6 col-lg-4 pb-3">
                            <label htmlFor="clientPhone">Client Contact Number *</label>
                            <input
                                type='tel'
                                id='clientPhone'
                                name='clientPhone'
                                value={clientPhone}
                                placeholder="+00 00000 00000"
                                className={`form-control rounded ${errors.clientPhone ? 'is-invalid' : ''}`}
                                onChange={(e) => handleInputChange(setClientPhone, 'clientPhone', e.target.value)}
                            />
                            {errors.clientPhone && <div className='invalid-feedback'>{errors.clientPhone}</div>}
                        </div>
                        <div className="form-group col-12 pb-3">
                            <label htmlFor="clientAddress">Client Address *</label>
                            <input
                                type='text'
                                id='clientAddress'
                                name='clientAddress'
                                value={clientAddress}
                                placeholder='Enter Address'
                                className={`form-control rounded ${errors.clientAddress ? 'is-invalid' : ''}`}
                                onChange={(e) => handleInputChange(setClientAddress, 'clientAddress', e.target.value)}
                            />
                            {errors.clientAddress && <div className='invalid-feedback'>{errors.clientAddress}</div>}
                        </div>
                    </div>
                    <hr />
                    <div className="row form-section">
                        <div className="form-group col-md-6 col-lg-4 pb-3">
                            <label htmlFor="clientCompany">Client Company *</label>
                            <input
                                type='text'
                                id='clientCompany'
                                name='clientCompany'
                                value={clientCompany}
                                placeholder='Company Name'
                                className={`form-control rounded ${errors.clientCompany ? 'is-invalid' : ''}`}
                                onChange={(e) => handleInputChange(setClientCompany, 'clientCompany', e.target.value)}
                            />
                            {errors.clientCompany && <div className='invalid-feedback'>{errors.clientCompany}</div>}
                        </div>
                        <div className="form-group col-md-6 col-lg-4 pb-3">
                            <label htmlFor="clientIndustry">Industry *</label>
                            <select
                                name="clientIndustry"
                                id="clientIndustry"
                                value={clientIndustry}
                                onChange={(e) => handleInputChange(setClientIndustry, 'clientIndustry', e.target.value)}
                                className={`form-select rounded ${errors.clientIndustry ? 'is-invalid' : ''}`}
                            >
                                <option value="">Select Industry</option>
                                <option value="Technology">Technology</option>
                                <option value="Healthcare">Healthcare</option>
                                <option value="Finance">Finance</option>
                                <option value="Education">Education</option>
                                <option value="Retail">Retail</option>
                                <option value="Other">Other</option>
                            </select>
                            {errors.clientIndustry && <div className='invalid-feedback'>{errors.clientIndustry}</div>}
                        </div>
                        {isUpdate && <div className="form-group col-md-6 col-lg-4 pb-3">
                            <label htmlFor="status">Status</label>
                            <select
                                name="status"
                                id="status"
                                value={status}
                                onChange={(e) => handleInputChange(setStatus, 'status', e.target.value)}
                                className={`form-select rounded ${errors.status ? 'is-invalid' : ''}`}
                            >
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                        </div>
                        }
                    </div>
                    <div className='dashboard-form-btn text-end'>
                        <button type="submit" className='btn btn-primary px-4 py-2 fw-semibold' >Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddClient