import React from 'react'
import ClientComponent from './ClientComponent';
import { useState } from 'react';
import ListClientComponent from './ListClientComponent';
import Header from './Header';
import Sidebar from './Sidebar';
import '../assets/css/dashboard.css'

const Dashboard = ({ onLogout }) => {


  const [viewClient, setViewClient] = useState(false);
  const [addClient, setAddClient] = useState(false);

  const handleViewClient = () => {
    setViewClient(true);
    setAddClient(false);
  };

  const handleAddClient = () => {
    setAddClient(true);
    setViewClient(false)
  };

  return (
    <div className='container-fluid'>
      <div className='dashboard row'>
      <div className="col-2 p-0">
        <Sidebar onHandleViewClient={handleViewClient} onHandleAddClient={handleAddClient} />
      </div>
      <div className="col-10 p-0">
        <Header onLogout={onLogout} />
        <main>
          {viewClient && <ListClientComponent />}
          {addClient && <ClientComponent />}
        </main>
      </div>
    </div>
    </div>
  );
}

export default Dashboard