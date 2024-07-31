import React from 'react'

const CreateInvoice = () => {
    return (
        <div class="create-invoice bg-white rounded">
            <div className="page-header">
                <h5 className=' p-4 mb-0'>Create Invoice</h5>
            </div>
            <hr className='m-0' />
            <div className="page-body p-4">
                <form className='dashboard-form'>
                    <div class="row form-section">
                        <div class="form-group col-md-6 col-lg-4 pb-3">
                            <label for="invoiceNumber" className='text-grey'>Invoice Number *</label>
                            <input type="text" class="form-control rounded" id="invoiceNumber" placeholder="#58963" disabled />
                        </div>
                        {/* <div class="form-group col-md-6 col-lg-4 d-flex align-items-end pb-3">
                            <div class="w-100">
                                <label for="selectClient">Select Client</label>
                                <div class="input-group">
                                    <select id="selectClient" class="form-control">
                                        <option selected>Choose...</option>

                                    </select>
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-secondary" type="button">+ New Client</button>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <hr />
                    <div class="row form-section">
                        <div class="form-group col-md-4 pb-3">
                            <label for="clientName">Client Name *</label>
                            <input type="text" class="form-control rounded" id="clientName" placeholder="Alex Z." />
                        </div>
                        <div class="form-group col-md-4 pb-3">
                            <label for="clientEmail">Client Email *</label>
                            <input type="email" class="form-control rounded" id="clientEmail" placeholder="alex@company.com" />
                        </div>
                        <div class="form-group col-md-4 pb-3">
                            <label for="clientContactNumber">Client Contact Number *</label>
                            <input type="text" class="form-control rounded" id="clientContactNumber" placeholder="+00 00000 00000" />
                        </div>
                    </div>

                    <div class="row form-section">
                        <div class="form-group col-md-12 pb-3">
                            <label for="clientAddress">Client Address *</label>
                            <input type="text" class="form-control" id="clientAddress" placeholder="Enter Address" />
                        </div>
                    </div>
                    <hr />
                    <div class="row form-section">
                        <div class="form-group col-md-4 pb-3">
                            <label for="invoiceDate">Invoice Date *</label>
                            <div class="input-group">
                                <input type="date" class="form-control" id="invoiceDate"  />
                            </div>
                        </div>
                        <div class="form-group col-md-4 pb-3">
                            <label for="invoiceDate">Due Date *</label>
                            <div class="input-group">
                                <input type="date" class="form-control" id="dueDate"  />
                            </div>
                        </div>
                        <div class="form-group col-md-4 pb-3">
                            <label for="status">Status *</label>
                            <select id="status" class="form-control">
                                <option selected>Pending</option>
                            </select>
                        </div>
                    </div>
                    <hr/>
                    <div className='dashboard-form-btn text-end'>
                        <button type="submit" className='btn btn-primary px-4 py-2 fw-semibold'>Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateInvoice