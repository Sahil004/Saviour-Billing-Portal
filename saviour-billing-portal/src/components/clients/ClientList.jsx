import React, { useEffect, useState } from "react"
import { deleteClient, listClient } from "../../services/ClientService"
import { useNavigate } from "react-router-dom"

const ClientList = () => {

    const [clients, setClients] = useState([]);
    const [errors, setErrors] = useState('');
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => { getAllClient(); }, []);

    function getAllClient() {
        listClient().then(response => {
            setClients(response.data);
            setLoading(false);
        }).catch(error => {
            console.error(error);
            setErrors('Failed to load Clients. Please try again later.');
            setLoading(false);
        });
    };
    const addNewClient = () => navigate('/add-client');

    function updateClient(id) {
        navigate(`/dashboard/clients/edit-client/${id}`);
    }

    function removeClient(id) {
        if (window.confirm('Are you sure you want to delete this service?')) {
            deleteClient(id).then((response) => {
                getAllClient();
            }).catch(error => {
                console.error(error);
            });
        }
    };

    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    if (errors) {
        return <div className="text-center text-danger">{errors}</div>;
    }

    return (
        <div className="bg-white rounded">
            <div className="page-header">
                <h5 className=' p-4 mb-0'>List Client</h5>
            </div>
            <div className="page-body p-4 h-100">
                <div className="table-container rounded">
                    <div className="table-header py-3"></div>
                    <table className="table mb-5 sticky-header">
                        <thead>
                            <tr>
                                <th>Client ID</th>
                                <th>Client Name</th>
                                <th>Client Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.length ? (
                                clients.map(client => (
                                    <tr key={client.id}>
                                        <td>{client.id}</td>
                                        <td>{client.name}</td>
                                        <td>{client.email}</td>
                                        <td>
                                            <button className="btn action-btn" onClick={() => updateClient(client.id)}><i className="bi bi-pencil-fill text-primary"></i></button>
                                            <button className="btn action-btn" onClick={() => removeClient(client.id)}><i className="bi bi-trash3-fill text-danger fw-bold"></i></button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-center">No clients available</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <div className="table-footer py-3"></div>
                </div>
            </div>
        </div>
    )
}

export default ClientList