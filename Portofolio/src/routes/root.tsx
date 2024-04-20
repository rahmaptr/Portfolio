import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Outlet, useLocation } from "react-router-dom";

function Root() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow overflow-auto">
        <Outlet />
      </div>
      {location.pathname === "/projects" && <Footer />}
    </div>
  );
}

export default Root;
