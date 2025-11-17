import { Outlet } from 'react-router-dom';

function MainLayout() {
  return (
    <>
      <Header />
      <div className='main-content'>
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
