import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { createService, getService, updateService } from '../../services/ServicesService';

const AddService = () => {

  const [service, setService] = useState('');
  const [description, setDescription] = useState('');
  const [code, setCode] = useState('');
  const [category, setCategory] = useState('');
  const [rateType, setRateType] = useState('');
  const [price, setPrice] = useState('');
  const [errors, setErrors] = useState({ service: '', code: '', description: '', category: '', rateType: '', price: '' })
  const navigator = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    if (id) {
      getService(id).then((response) => {
        setService(response.data.serviceName);
        setDescription(response.data.serviceDescription);
        setCode(response.data.serviceCode);
        setCategory(response.data.category);
        setRateType(response.data.rateType);
        setPrice(response.data.price.toString());
      }).catch(error => {
        console.error(error);
      })
    }
  }, [id])

  function addOrUpdateService(e) {
    e.preventDefault();
    if (validateForm()) {
      const services = { serviceName: service, serviceCode: code, serviceDescription: description, category, rateType, price: parseFloat(price)  };
      
      if (id) {
        updateService(id, services).then((response) => {
          alert('Service Updated');
          navigator('/dashboard/services/services-list')
        }).catch(error => {
          console.error(error);
        })
      } else {
        createService(services).then((response) => {
          alert('Service Added');
          navigator('/dashboard/services/services-list')
        }).catch(error => {
          console.error(error);
        })
      }
    }
  }

  // form validation
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

    if (code.trim()) {
      errorsCopy.code = "";
    } else {
      errorsCopy.code = "Service code is Required";
      valid = false;
    }

    if (category.trim()) {
      errorsCopy.category = "";
    } else {
      errorsCopy.category = "Category is Required";
      valid = false;
    }

    if (rateType.trim()) {
      errorsCopy.rateType = "";
    } else {
      errorsCopy.rateType = "Rate Type is Required";
      valid = false;
    }

    if (price.trim()) {
      errorsCopy.price = "";
    } else {
      errorsCopy.price = "Price is Required";
      valid = false;
    }

    setErrors(errorsCopy);

    return valid;
  }

  function handleInputChange(setValue, field, value) {
    setValue(value);
    setErrors(prevErrors => ({ ...prevErrors, [field]: '' }));
  }
  return (
    <div className="create-invoice bg-white rounded">
      <div className="page-header">
        <h5 className="p-4 mb-0">{id ? 'Edit Service' : 'Add Service'}</h5>
      </div>
      <hr className='m-0' />
      <div className="page-body p-4">
        <form className='dashboard-form' onSubmit={addOrUpdateService}>
          <div className="row form-section">
            <div className="form-group col-md-6 col-lg-4 pb-3">
              <label htmlFor="service">Service Name *</label>
              <input
                type="text"
                className={`form-control rounded ${errors.service ? 'is-invalid' : ''}`}
                id="service"
                value={service}
                name="service"
                placeholder="e.g., Web Development"
                onChange={(e) => handleInputChange(setService, 'service', e.target.value)}
              />
              {errors.service && <div className='invalid-feedback'>{errors.service}</div>}
            </div>
            <div className="form-group col-md-6 col-lg-4 pb-3">
              <label htmlFor="code">Service Code *</label>
              <input
                type="text"
                name="code"
                id="code"
                className={`form-control rounded ${errors.code ? 'is-invalid' : ''}`}
                value={code}
                placeholder='e.g., SVC001'
                onChange={(e) => handleInputChange(setCode, 'code', e.target.value)}
              />
              {errors.code && <div className='invalid-feedback'>{errors.code}</div>}
            </div>
            <div className="form-group col-md-6 col-lg-4 pb-3">
              <label htmlFor="category">Category *</label>
              <select
                name="category"
                id="category"
                value={category}
                onChange={(e) => handleInputChange(setCategory, 'category', e.target.value)}
                className={`form-select rounded ${errors.category ? 'is-invalid' : ''}`}
              >
                <option value="" disabled>Select category</option>
                <option value="Web Development">Web Development</option>
                <option value="Mobile Development">Mobile Development</option>
                <option value="Cloud Services">Cloud Services</option>
                <option value="Consulting">Consulting</option>
              </select>
              {errors.category && <div className='invalid-feedback'>{errors.category}</div>}
            </div>
          </div>
          <hr />
          <div className="row form-section">
            <div className="form-group col-12 pb-3">
              <label htmlFor="description">Service Description *</label>
              <textarea
                rows={2}
                type="text"
                className={`form-control rounded ${errors.description ? 'is-invalid' : ''}`}
                value={description}
                name="description" id="description"
                placeholder="e.g., Development of responsive websites"
                onChange={(e) => handleInputChange(setDescription, 'description', e.target.value)} />
              {errors.description && <div className='invalid-feedback'>{errors.description}</div>}
            </div>
          </div>
          <hr />
          <div className="row form-section">
            <div className="form-group col-md-6 col-lg-4 pb-3">
              <label htmlFor="rateType">Rate Type *</label>
              <select
                name="rateType"
                id="rateType"
                value={rateType}
                onChange={(e) => handleInputChange(setRateType, 'rateType', e.target.value)}
                className={`form-select rounded ${errors.rateType ? 'is-invalid' : ''}`}
              >
                <option value="" disabled>Select rate type</option>
                <option value="Hourly">Hourly</option>
                <option value="Fixed">Fixed</option>
              </select>
              {errors.rateType && <div className='invalid-feedback'>{errors.rateType}</div>}
            </div>
            <div className="form-group col-md-6 col-lg-4 pb-3">
              <label htmlFor="price">Price *</label>
              <input
                type="number"
                step="1000"
                name="price"
                id="price"
                className={`form-control rounded ${errors.price ? 'is-invalid' : ''}`}
                value={price}
                placeholder='e.g., 100 (INR)'
                onChange={(e) => handleInputChange(setPrice, 'price', e.target.value)}
              />
              {errors.price && <div className='invalid-feedback'>{errors.price}</div>}
            </div>
          </div>
          <div className='dashboard-form-btn text-end'>
            <button type="submit" className='btn btn-primary px-4 py-2 fw-semibold' >Save</button>
          </div>
        </form>
      </div >
    </div >
  )
}

export default AddService