import React, { useEffect, useState } from "react"
import { listClient } from "../services/ClientService"

const ListClientComponent = () =>{

    const [clients, setClient] = useState([])

    useEffect(() => {
        listClient().then((response) => {
            setClient(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, [])
        
    return (
        <div className="container">
            <h1 className="text-center">List of Clients</h1>
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