import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

function MainLayout() {
  return (
    <>
      <Header />
      <div className="main-content">
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
