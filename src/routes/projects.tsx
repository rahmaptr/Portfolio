import { useContext, useEffect, memo } from "react";
import { Element } from "react-scroll";
import { Card, CardTitle } from "@/components/ui/card";
import Arrow from "@/components/arrow";
import { Link, useNavigate } from "react-router-dom";
import { ArrowContext } from "@/contexts/arrow-context";
import TripTracks from "../assets/TripTracks.png";
import shareFile from "../assets/shareFile.png";
import portfolio from "../assets/portfolio.png";
import webGovokasi from "../assets/webGovokasi.png";
import laundryFlow from "../assets/laundryFlow.png";

function Projects() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const { showUpArrow, setShowUpArrow } = useContext(ArrowContext);
  const navigate = useNavigate();
  const handleClick = () => {
    if (showUpArrow) {
      navigate("/");
      setShowUpArrow(false);
    } else {
      navigate("/");
    }
  };

  const projects = [
    {
      title: "TripTracks",
      img: TripTracks,
      description:
        "React application for trip planner with weather checker and Google directions",
      link: "https://triptracks.web.app/",
    },
    {
      title: "File Share",
      img: shareFile,
      description: "Peer-to-peer file share with socket.io",
      link: "https://github.com/file-sharing-app/group-project",
    },
    {
      title: "This portfolio",
      img: portfolio,
      description: "Made with React, Tailwind CSS, and Vite",
      link: "https://www.arpiza.site",
    },
    {
      title: "GOVOKASI Website (In Progress)",
      img: webGovokasi,
      description: "GOVOKASI Website for PBI Project",
      link: "https://wd-g2-web.web.app/",
    },
    {
      title: 'LaundryFlow',
      img: laundryFlow,
      description: 'LaundryFlow is a laundry management system',
      link: '',
    }
  ];

  return (
    <Element name="projects" className="pt-20 flex flex-col">
      <h3 className="text-center hover:underline pb-4">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-1/2 mx-auto">
        {projects.map((project, i) => (
          <Card key={i} className="p-4">
            <CardTitle className="text-center pb-4 hover:underline">
              <Link to={project.link}>{project.title}</Link>
            </CardTitle>
            {project.img && (
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-52 object-contain mb-3 border rounded-md"
              />
            )}
            <p className="text-justify">{project.description}</p>
          </Card>
        ))}
      </div>
      <div onClick={handleClick}>
        <Arrow />
      </div>
    </Element>
  );
}

export default memo(Projects);
