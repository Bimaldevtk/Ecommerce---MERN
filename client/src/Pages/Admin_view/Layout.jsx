import React from 'react';
import {Outlet} from  'react-router-dom';

const AdminLayout = () => {
  return (
    <div className='flex flex-1 min-h-screen w-full'>
        {/* admin Sidebar */}
        <div className='flex flex-1 flex-col'>
            {/* admin Header */}
            <main className='flex flex-1 bg-muted/40 p-4 md:p-6'>
            <Outlet/>

            </main>

        </div>
      
    </div>
  )
}

export default AdminLayout
