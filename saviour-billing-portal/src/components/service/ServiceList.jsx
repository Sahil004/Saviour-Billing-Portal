import React, { useEffect, useState } from 'react'
import { listServices, deleteService } from '../../services/ServicesService';
import { useNavigate } from 'react-router-dom';

const ServiceList = () => {

  const [services, setServices] = useState([]);
  const [errors, setErrors] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => { getAllServices() }, []);

  const navigate = useNavigate();


  function getAllServices() {
    listServices().then(response => {
      setServices(response.data);
      setLoading(false);
    }).catch(error => {
      console.error(error);
      setErrors('Failed to load services. Please try again later.');
      setLoading(false);
    })
  };

  function updateService(id) {
    navigate(`/dashboard/services/edit-service/${id}`);
  }

  function removeService(id) {
    if (window.confirm('Are you sure you want to delete this service?')) {
      deleteService(id).then(response => {
        getAllServices();
      }).catch(error => {
        console.error(error);
        setErrors('Failed to delete service. Please try again later.');
      })
    }
  }

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (errors) {
    return <div className="text-center text-danger">{errors}</div>;
  }

  return (
    <div className="bg-white rounded">
      <div className="page-header">
        <h5 className=' p-4 mb-0'>Servicesss</h5>
      </div>
      <hr className='m-0' />
      <div className="page-body p-4">
        <div className="table-container rounded">
          <table className="table mb-5 sticky-header">
            <thead>
              <tr>
                <th>Service Code</th>
                <th>Service Name</th>
                <th>Description</th>
                <th>Category</th>
                <th>Rate Type</th>
                <th>Price (INR)</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                services.map(service => (
                  <tr key={service.serviceID}>
                    <td>{service.serviceCode}</td>
                    <td>{service.serviceName}</td>
                    <td>{service.serviceDescription}</td>
                    <td>{service.category}</td>
                    <td>{service.rateType}</td>
                    <td>₹ {service.price}</td>
                    <td>
                      <button className="btn action-btn" onClick={() => updateService(service.serviceID)}><i className="bi bi-pencil-fill text-primary"></i></button>
                      <button className="btn action-btn" onClick={() => removeService(service.serviceID)}><i className="bi bi-trash3-fill text-danger fw-bold"></i></button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>

        </div>
      </div>
    </div>
  )
}

export default ServiceList