import React, { useEffect, useState } from 'react'
import { listServices, deleteService } from '../../services/ServicesService';
import { useNavigate } from 'react-router-dom';

const ViewServices = () => {

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
        <div className="card-container row">
          {services.length ? (
            services.map(service => (
              <div className="col-md-6 col-xl-3 mb-4" key={service.serviceID}>
                <div className="card h-100 border rounded service-card">
                  <div className="card-body">
                    <h5 className="service-title">{service.serviceName} </h5>
                    <span className='service-code text-grey'>({service.serviceCode})</span>
                    <p className="service-description text-grey py-3">{service.serviceDescription}</p>
                    <div className="row">
                      <div className="col-6">
                        <strong>Category:</strong>
                        <p className="service-category"> {service.category}</p>
                      </div>
                      <div className="col-6">
                        <strong>Price:</strong>
                        <p className="service-price"> ₹ {service.price}{service.rateType === 'Hourly' ? '/hr' : ''}</p>
                      </div>
                    </div>
                  </div>
                  <div className="service-action d-flex justify-content-between p-3">
                    <button className="btn btn-outline-success" onClick={() => updateService(service.serviceID)}><i className="bi bi-pencil-fill pe-3"></i>Edit</button>
                    <button className="btn btn-outline-danger" onClick={() => removeService(service.serviceID)}><i className="bi bi-trash3-fill fw-bold pe-3"></i>Delete</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">No services available</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ViewServices