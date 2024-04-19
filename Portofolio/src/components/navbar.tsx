import { ModeToggle } from "./mode-toggle";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between w-screen p-5 fixed bg-background z-10">
      <ModeToggle />
      <div className="flex justify-around w-1/6">
        <Link to="https://github.com/rahmaptr"><SiGithub size={'2.2em'} /></Link>
        <Separator orientation="vertical"/>
        <Link to="https://www.linkedin.com/in/rahmah-putri-azzahra/"><SiLinkedin size={'2.2em'}/></Link>
        <Separator orientation="vertical"/>
        <Link to="https://mail.google.com/mail/?view=cm&fs=1&to=rahmaputriazzahra@gmail.com"><SiGmail size={'2.2em'}/></Link>
      </div>
    </nav>
  )
}

export default Navbar;