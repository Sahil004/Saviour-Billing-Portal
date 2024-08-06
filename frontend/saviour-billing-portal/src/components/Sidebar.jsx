import React from 'react';
import SaviourLogo from '../assets/SaviourLogo.jpg';
import SidebarItems from './SidebarItems';

const Sidebar = () => {
  return (
    <aside id='sidebar' className='sidebar border-right'>
      <div className='sidebar-title'>
        <div className='sidebar-brand w-75 pt-2 ps-2'>
          <img src={SaviourLogo} alt='Saviour Technologies' />
        </div>
        <SidebarItems/>
      </div>

    </aside>
  );
}

export default Sidebar;
