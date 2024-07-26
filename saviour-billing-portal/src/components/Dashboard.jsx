import React from 'react';
import AddClient from './clients/AddClient';
import ClientList from './clients/ClientList';
import Header from './Header';
import Sidebar from './Sidebar';
import '../assets/css/dashboard.css';
import { Route, Routes } from 'react-router-dom';
import CreateInvoice from './invoice/CreateInvoice';
import AddService from './service/AddService';
import ServiceList from './service/ServiceList';

const Dashboard = ({ onLogout }) => {
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
              <Routes>
                <Route path="services/create-service" element={<AddService />} />
                <Route path="services/services-list" element={<ServiceList />} />
                <Route path="clients/add-client" element={<AddClient />} />
                <Route path="clients/client-list" element={<ClientList />} />
                <Route path="invoice/create-invoice" element={<CreateInvoice />} />
                {/* Add more routes as needed */}
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
