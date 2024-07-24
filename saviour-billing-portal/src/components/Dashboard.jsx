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

        <div className="d-none d-lg-block col-md-3 col-xl-2 col p-0">
          <Sidebar onHandleViewClient={handleViewClient} onHandleAddClient={handleAddClient} />
        </div>
        <div className="col-12 col-lg-9 col-xl-10 p-0">
          <Header onLogout={onLogout} onHandleViewClient={handleViewClient} onHandleAddClient={handleAddClient} />
          <main className='container'>
            <div className='main px-3 pt-3 px-lg-4 pt-lg-4'>
              {viewClient && <ListClientComponent />}
              {addClient && <ClientComponent />}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Dashboard