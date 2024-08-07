import React, { useEffect, useState } from 'react'
import { listClient } from '../../services/ClientService';

const CreateInvoice = () => {

    const [clients, setClients] = useState([]);
    const [selectedClient, setSelectedClient] = useState('');
    const [selectedClientId, setSelectedClientId] = useState('');

    useEffect(() => {
        listClient().then(response => {
            setClients(response.data);
        }).catch(error => console.error(error));
    }, [])

    const handleClientChange = (e) => {
        const clientId = e.target.value;
        setSelectedClientId(clientId);
        const client = clients.find(c => c.clientId === parseInt(clientId));
        setSelectedClient(client)
    };

    return (
        <div className="create-invoice bg-white rounded">
            <div className="page-header">
                <h5 className=' p-4 mb-0'>Create Invoice</h5>
            </div>
            <hr className='m-0' />
            <div className="page-body p-4">
                <form className='dashboard-form'>
                    <div className="row form-section">
                        <div className="form-group col-md-6 col-lg-4 pb-3">
                            <label htmlFor="invoiceNumber" className='text-grey'>Invoice Number *</label>
                            <input type="text" className="form-control rounded" id="invoiceNumber" placeholder="#58963" disabled />
                        </div>
                        <div className="form-group col-md-6 col-lg-4 pb-3">
                            <label htmlFor="selectClient">Select Client</label>
                            <div className="input-group">
                                <select
                                    name='selectClient'
                                    id="selectClient"
                                    className="form-select"
                                    value={selectedClientId}
                                    onChange={handleClientChange}>
                                    <option value=''>Select Client</option>
                                    {clients.map(client => (
                                        <option key={client.clientId} value={client.clientId}>{client.clientName}</option>
                                    ))
                                    }
                                </select>
                                <button className="btn btn-success" type="button">+ New Client</button>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="row form-section">
                        <div className="form-group col-md-6 col-lg-4 pb-3">
                            <label htmlFor="clientName">Client Name *</label>
                            <input
                                type='text'
                                id='clientName'
                                name='clientName'
                                value={selectedClient.clientName}
                                placeholder='e.g., James Walter'
                                className='form-control'
                                disabled
                            />
                        </div>
                        <div className="form-group col-md-4 pb-3">
                            <label htmlFor="clientEmail">Client Email *</label>
                            <input type="email" className="form-control rounded" id="clientEmail" placeholder="alex@company.com" />
                        </div>
                        <div className="form-group col-md-4 pb-3">
                            <label htmlFor="clientContactNumber">Client Contact Number *</label>
                            <input type="text" className="form-control rounded" id="clientContactNumber" placeholder="+00 00000 00000" />
                        </div>
                    </div>

                    <div className="row form-section">
                        <div className="form-group col-md-12 pb-3">
                            <label htmlFor="clientAddress">Client Address *</label>
                            <input type="text" className="form-control" id="clientAddress" placeholder="Enter Address" />
                        </div>
                    </div>
                    <hr />
                    <div className="row form-section">
                        <div className="form-group col-md-4 pb-3">
                            <label htmlFor="invoiceDate">Invoice Date *</label>
                            <div className="input-group">
                                <input type="date" className="form-control" id="invoiceDate" />
                            </div>
                        </div>
                        <div className="form-group col-md-4 pb-3">
                            <label htmlFor="invoiceDate">Due Date *</label>
                            <div className="input-group">
                                <input type="date" className="form-control" id="dueDate" />
                            </div>
                        </div>
                        <div className="form-group col-md-4 pb-3">
                            <label htmlFor="status">Status *</label>
                            <select id="status" className="form-control">
                                <option selected>Pending</option>
                            </select>
                        </div>
                    </div>
                    <hr />
                    <div className='dashboard-form-btn text-end'>
                        <button type="submit" className='btn btn-primary px-4 py-2 fw-semibold'>Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateInvoice