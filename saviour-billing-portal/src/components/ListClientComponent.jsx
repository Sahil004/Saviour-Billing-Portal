import React, { useEffect, useState } from "react"
import { deleteClient, listClient } from "../services/ClientService"
import { useNavigate } from "react-router-dom"
import Header from './Header';
import Sidebar from './Sidebar';

const ListClientComponent = ({ onLogout }) => {

    const [clients, setClients] = useState([]);

    const navigate = useNavigate();

    useEffect(() => { getAllClient(); }, []);

    function getAllClient() {
        listClient().then(response => {
            console.log("API Response:", response.data);
            setClients(response.data);

        }).catch(error => {
            console.error(error);
        });
    };
    const addNewClient = () => navigate('/add-client');

    function updateClient(id) {
        navigate(`/edit-client/${id}`);
    }

    function removeClient(id) {
        console.log(id);

        deleteClient(id).then((response) => {
            getAllClient();
        }).catch(error => {
            console.error(error);
        });
    };
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
                            <div className="container">
                                <h1 className="text-center">List of Clients</h1>
                                <button className="btn btn-success my-4" onClick={addNewClient}>Add Client</button>
                                <table className="table table-striped table-bordered mb-5">
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
                                                        <button className="btn btn-warning me-3" onClick={() => updateClient(client.id)}>Update</button>
                                                        <button className="btn btn-danger" onClick={() => removeClient(client.id)}>Delete</button>
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
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default ListClientComponent