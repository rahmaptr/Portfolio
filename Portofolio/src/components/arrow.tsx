import { Badge } from "./ui/badge";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowContext } from "@/contexts/arrow-context";

function Arrow() {
  const { showUpArrow, setShowUpArrow } = useContext(ArrowContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        if (location.pathname === "/" && !showUpArrow) {
          navigate("/projects");
        } else if (location.pathname === "/projects") {
          setShowUpArrow(true);
        } else if (location.pathname === "/") {
          setShowUpArrow(false);
        }
      } else {
        if (location.pathname === "/projects" && showUpArrow) {
          setShowUpArrow(false);
          navigate("/");
        }
      }
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, [navigate]);

  return (
    <Badge className="fixed bottom-5 right-5 z-50 size-10 flex justify-center align-middle">
      {showUpArrow ? <SlArrowUp size={"2em"} /> : <SlArrowDown size={"2em"} />}
    </Badge>
  );
}

export default Arrow;
