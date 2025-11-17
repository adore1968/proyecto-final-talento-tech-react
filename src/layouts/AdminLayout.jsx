import { Outlet } from 'react-router-dom';

function AdminLayout() {
  return (
    <section className='admin-layout'>
      <Outlet />
    </section>
  );
}

export default AdminLayout;
