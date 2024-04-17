import Footer from "@/components/Footer";
import { ModeToggle } from "@/components/mode-toggle";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <ModeToggle />
      <Outlet />
      <Footer />
    </>
  )
}

export default Root;