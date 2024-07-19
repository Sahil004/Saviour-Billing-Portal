import React, { useEffect, useState } from "react"
import { deleteClient, listClient } from "../services/ClientService"
import { useNavigate } from "react-router-dom"

const ListClientComponent = () => {

    const [clients, setClient] = useState([])

    const navigator = useNavigate();

    useEffect(() => getAllClient(), []);

    function getAllClient(){
        listClient().then((response) => {
            setClient(response.data);
        }).catch(error => {
            console.error(error);
        })
    }
    const addNewClient = () => navigator('/add-client');

    function updateClient(id) {
        navigator(`/edit-client/${id}`);
    }

    function removeClient(id) {
        console.log(id);

        deleteClient(id).then((response) => {
            getAllClient();
        }).catch(error => {
            console.error(error);
        })
    }
    return (
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
                    {
                        clients.map(client =>
                            <tr key={client.id}>
                                <td>{client.id}</td>
                                <td>{client.name}</td>
                                <td>{client.email}</td>
                                <td>
                                    <button className="btn btn-warning me-3" onClick={() => updateClient(client.id)}>Update</button>
                                    <button className="btn btn-danger" onClick={() => removeClient(client.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                    <tr>

                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ListClientComponent