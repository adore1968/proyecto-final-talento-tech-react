import { Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <main className="container py-4">
      <Outlet />
    </main>
  );
}

export default AdminLayout;
