import React from 'react'

const AddService = () => {
  return (
    <div class="create-invoice bg-white rounded">
      <div className="page-header">
        <h5 className=' p-4 mb-0'>Add Service</h5>
      </div>
      <hr className='m-0' />
      <div className="page-body p-4">
        <form className='dashboard-form'>
          <div class="row form-section">
            <div class="form-group col-md-6 col-lg-4 pb-4">
              <input type="text" class="form-control rounded" id="serviceName" placeholder="name" required />
            </div>
            <div class="form-group col-12 pb-4">
              <textarea rows={2} type="text" class="form-control rounded" id="serviceDescription" placeholder="Description" required />
            </div>
            <div className='dashboard-form-btn text-end'>
              <button type="submit" className='btn btn-primary px-4 py-2 fw-semibold'>Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddService