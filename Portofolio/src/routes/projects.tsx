import { useContext, useEffect } from "react";
import { Element } from "react-scroll";
import { Card, CardTitle } from "@/components/ui/card";
import Arrow from "@/components/arrow";
import { useNavigate } from "react-router-dom";
import { ArrowContext } from "@/contexts/arrow-context";

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
    if (showUpArrow) navigate("/");
    setShowUpArrow(false);
  };

  return (
    <Element name="projects" className="pt-20 flex flex-col">
      <h3 className="text-center hover:underline">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-1/2 mx-auto">
        <Card className="p-4">
          <CardTitle className="text-center">Project 1</CardTitle>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            doloribus alias blanditiis commodi minima dolore ad recusandae.
            Praesentium accusamus totam fugiat nihil hic, nulla adipisci
            doloribus inventore. Tempore et optio error, corrupti quam nemo
            voluptas vero! Ipsa quisquam delectus perferendis est corrupti, at
            nisi id eaque, vitae sed, eligendi pariatur voluptatibus sapiente
            placeat. Vel, rerum? Quisquam, mollitia in quibusdam, doloribus iure
            necessitatibus voluptas ex eligendi blanditiis est dolorem
            asperiores vel. Blanditiis enim dicta molestias quis nisi expedita
            quam consequuntur nesciunt sunt consequatur, cupiditate quo aut
            delectus repellendus eos tempora natus libero molestiae officiis
            earum ipsa voluptas! Hic accusamus maxime id.
          </p>
        </Card>
        <Card className="p-4">
          <CardTitle className="text-center">Project 2</CardTitle>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            doloribus alias blanditiis commodi minima dolore ad recusandae.
            Praesentium accusamus totam fugiat nihil hic, nulla adipisci
            doloribus inventore. Tempore et optio error, corrupti quam nemo
            voluptas vero! Ipsa quisquam delectus perferendis est corrupti, at
            nisi id eaque, vitae sed, eligendi pariatur voluptatibus sapiente
            placeat. Vel, rerum? Quisquam, mollitia in quibusdam, doloribus iure
            necessitatibus voluptas ex eligendi blanditiis est dolorem
            asperiores vel. Blanditiis enim dicta molestias quis nisi expedita
            quam consequuntur nesciunt sunt consequatur, cupiditate quo aut
            delectus repellendus eos tempora natus libero molestiae officiis
            earum ipsa voluptas! Hic accusamus maxime id.
          </p>
        </Card>
      </div>
      <div onClick={handleClick}>
        <Arrow />
      </div>
    </Element>
  );
}

export default Projects;
