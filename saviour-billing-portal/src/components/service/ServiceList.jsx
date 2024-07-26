import React from 'react'

const ServiceList = () => {
  return (
    <div className="container">
      <h1 className="text-center">List of Clients</h1>
      <div className="table-container">
        <table className="table table-bordered mb-5 sticky-header">
          <thead>
            <tr>
              <th>Service ID</th>
              <th>Service Name</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ServiceList