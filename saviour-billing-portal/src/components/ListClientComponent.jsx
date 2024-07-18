import React, { useEffect, useState } from "react"
import { listClient } from "../services/ClientService"
import { useNavigate } from "react-router-dom"

const ListClientComponent = () =>{

    const [clients, setClient] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        listClient().then((response) => {
            setClient(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, [])
       
    const addNewClient = () =>navigator('/add-client');
    return (
        <div className="container">
            <h1 className="text-center">List of Clients</h1>
            <button className="btn btn-success my-4" onClick={addNewClient}>Add Client</button>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Client ID</th>
                        <th>Client Name</th>
                        <th>Client Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clients.map(client => 
                            <tr key={client.id}>
                                <td>{client.id}</td>
                                <td>{client.name}</td>
                                <td>{client.email}</td>
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