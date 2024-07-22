import React from 'react'
import ClientComponent from './ClientComponent';
import { useState } from 'react';
import ListClientComponent from './ListClientComponent';
import HeaderComponent from './Header';
import Sidebar from './Sidebar';

const Dashboard = ({onLogout}) => {


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
    <>
      <HeaderComponent onLogout={onLogout}/>
      <Sidebar onHandleViewClient={handleViewClient} onHandleAddClient={handleAddClient} />
      <main>
        {viewClient && <ListClientComponent />}

        {addClient && <ClientComponent />}
      </main>
    </>
  );
}

export default Dashboard