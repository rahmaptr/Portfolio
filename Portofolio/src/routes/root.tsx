import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow overflow-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Root;
