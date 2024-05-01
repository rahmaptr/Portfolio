import Arrow from "@/components/arrow";
import { Card, CardTitle } from "@/components/ui/card";
import { ArrowContext } from "@/contexts/arrow-context";
import { useContext } from "react";
import { SiApollographql, SiCss3, SiExpress, SiFirebase, SiGithub, SiGooglecloud, SiGraphql, SiHtml5, SiJavascript, SiJest, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript, SiVercel, SiVite } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { Element } from "react-scroll";

function Skills() {
  const navigate = useNavigate();
  const { showUpArrow } = useContext(ArrowContext);
  const handleClick = () => {
    if (!showUpArrow) navigate("/projects");
  };
  
  const skills = [
    { icon: <SiHtml5 size={"2em"}/>, name: "HTML" },
    { icon: <SiCss3 size={"2em"}/>, name: "CSS" },
    { icon: <SiJavascript size={"2em"}/>, name: "JavaScript" },
    { icon: <SiReact size={"2em"}/>, name: "React" },
    { icon: <SiNodedotjs size={"2em"}/>, name: "Node.js" },
    { icon: <SiExpress size={"2em"}/>, name: "Express" },
    { icon: <SiMongodb size={"2em"}/>, name: "MongoDB" },
    { icon: <SiTypescript size={"2em"}/>, name: "TypeScript" },
    { icon: <SiGraphql size={"2em"}/>, name: "GraphQL" },
    { icon: <SiApollographql size={"2em"}/>, name: "Apollo" },
    { icon: <SiNextdotjs size={"2em"}/>, name: "Next.js" },
    { icon: <SiTailwindcss size={"2em"}/>, name: "Tailwind CSS" },
    { icon: <SiVite size={"2em"}/>, name: "Vite" },
    { icon: <SiJest size={"2em"}/>, name: "Jest" },
    { icon: <SiGooglecloud size={"2em"}/>, name: "Google Cloud" },
    { icon: <SiFirebase size={"2em"}/>, name: "Firebase" },
    { icon: <SiVercel size={"2em"}/>, name: "Vercel" },
    { icon: <SiGithub size={"2em"}/>, name: "GitHub" },
  ];

  skills.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <Element name="skills" className="pt-20 flex flex-col">
      <h3 className="text-center hover:underline pb-4">Skills</h3>
      <div className="grid grid-cols-3 gap-4 w-[45%] mx-auto mb-4">
      {skills.map((skill, i) => (
        <Card key={i} className="p-4 flex h-auto flex-col justify-center items-center hover:ring-2 hover:ring-[#b8568c]">
          {skill.icon}
          <CardTitle className="text-xl pt-3">{skill.name}</CardTitle>
        </Card>
      ))}
      </div>
      <div onClick={handleClick}>
        <Arrow />
      </div>
    </Element>
  );
}

export default Skills;
