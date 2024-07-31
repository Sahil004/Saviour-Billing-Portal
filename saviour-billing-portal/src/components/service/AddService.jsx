import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createService } from '../../services/ServicesService';

const AddService = () => {

  const [service, setService] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({ service: '', description: '' })
  const navigator = useNavigate();

  function addService(e) {
    e.preventDefault();
    if (validateForm()) {
      const services = { service, description };
      createService(services).then((response) => {
        console.log(response.data)
        alert('Service Added');
        navigator('/dashboard/services/services-list')
      }).catch(error => {
        console.error(error);
    })
    }
  }

  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };

    if (service.trim()) {
      errorsCopy.service = "";
    } else {
      errorsCopy.service = "Service name is Required";
      valid = false;
    }

    if (description.trim()) {
      errorsCopy.description = "";
    } else {
      errorsCopy.description = "Service Description is Required";
      valid = false;
    }

    setErrors(errorsCopy);

    return valid;
  }
  return (
    <div className="create-invoice bg-white rounded">
      <div className="page-header">
        <h5 className=' p-4 mb-0'>Add Service</h5>
      </div>
      <hr className='m-0' />
      <div className="page-body p-4">
        <form className='dashboard-form' onSubmit={addService}>
          <div className="row form-section">
            <div className="form-group col-md-6 col-lg-4 pb-4">
              <input
                type="text"
                className={`form-control rounded ${errors.service ? 'is-invalid' : ''}`}
                id="service" value={service}
                name="service" placeholder="name"
                onChange={(e) => setService(e.target.value)} />
              {errors.service && <div className='invalid-feedback'>{errors.service}</div>}
            </div>
            <div className="form-group col-12 pb-4">
              <textarea
                rows={2}
                type="text"
                className={`form-control rounded ${errors.description ? 'is-invalid' : ''}`}
                value={description}
                name="service" id="description"
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)} />
              {errors.description && <div className='invalid-feedback'>{errors.description}</div>}
            </div>
            <div className='dashboard-form-btn text-end'>
              <button type="submit" className='btn btn-primary px-4 py-2 fw-semibold' >Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddService