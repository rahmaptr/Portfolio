import { ModeToggle } from "./mode-toggle";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { Separator } from "./ui/separator";

function Navbar() {
  return (
    <nav className="flex justify-between w-screen p-5 fixed bg-background z-10">
      <ModeToggle />
      <div className="flex justify-around w-1/6">
        <SiGithub size={'2.2em'} />
        <Separator orientation="vertical"/>
        <SiLinkedin size={'2.2em'}/>
        <Separator orientation="vertical"/>
        <SiGmail size={'2.2em'}/>
      </div>
    </nav>
  )
}

export default Navbar;