import React from 'react'
import { useState } from 'react';

const Sidebar = ({ viewClient, addClient, onHandleViewClient, onHandleAddClient }) => {


  return (
    <aside>
        <ul>
            <li><button className="btn btn-primary" onClick={onHandleViewClient}>View Client</button></li>
            <li><button className="btn btn-primary" onClick={onHandleAddClient}>Add Client</button></li>
        </ul>
    </aside>
  )
}

export default Sidebar