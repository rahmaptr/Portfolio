import React from "react";
import { useNavigate } from "react-router-dom";
import Arrow from "@/components/arrow";
import Profile from "@/assets/profile.jpg";
import { useContext } from "react";
import { ArrowContext } from "@/contexts/arrow-context";

function Home() {
  const navigate = useNavigate();
  const { showUpArrow } = useContext(ArrowContext);

  const handleClick = () => {
    if (!showUpArrow) navigate("/skills");
  };

  return (
    <div className="px-6 relative overflow-x-hidden" id="home">
      <svg
        className="absolute w-full h-full -z-10 flex -right-[25em] transform scale-120"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="clipPath">
            <path
              fill="#FF0066"
              d="M46.6,-35.7C60.3,-19.9,71.4,-0.6,66.9,13.7C62.4,27.9,42.3,37.1,23.7,44C5.2,50.9,-11.9,55.6,-31.1,51.4C-50.3,47.2,-71.7,34.2,-73.3,19C-74.9,3.9,-56.8,-13.5,-41.3,-29.7C-25.8,-45.9,-12.9,-60.9,1.8,-62.3C16.4,-63.7,32.9,-51.5,46.6,-35.7Z"
              transform="translate(100 100)"
            />
          </clipPath>
          <filter id="ring" height="130%">
            <feMorphology
              operator="dilate"
              radius="2"
              in="SourceAlpha"
              result="thicken"
            />
            <feGaussianBlur in="thicken" stdDeviation="2" result="blurred" />
            <feFlood floodColor="#b8568c" result="glowColor" />
            <feComposite
              in="glowColor"
              in2="blurred"
              operator="in"
              result="softGlow_colored"
            />
            <feMerge>
              <feMergeNode in="softGlow_colored" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          fill="#FF0066"
          d="M46.6,-35.7C60.3,-19.9,71.4,-0.6,66.9,13.7C62.4,27.9,42.3,37.1,23.7,44C5.2,50.9,-11.9,55.6,-31.1,51.4C-50.3,47.2,-71.7,34.2,-73.3,19C-74.9,3.9,-56.8,-13.5,-41.3,-29.7C-25.8,-45.9,-12.9,-60.9,1.8,-62.3C16.4,-63.7,32.9,-51.5,46.6,-35.7Z"
          transform="translate(100 100)"
          filter="url(#ring)"
        />
        <image
          href={Profile}
          x="20"
          y="10"
          height="150"
          width="150"
          clipPath="url(#clipPath)"
        />{" "}
        //FIXME: change temporary image
      </svg>

      <div className="h-screen flex flex-col justify-center z-50">
        <h4 className="">Hacktiv8 FSJS Graduate</h4>
        <h1>
          <span className="hover:underline">Rahma</span>h Putri Azzahra
        </h1>
        <p className="text-wrap w-1/2 pt-3">
          I am passionate about learning and thrive in collaborative
          environments. My interest in new technologies and methodologies makes
          me an asset to any team. With strong problem-solving skills, I
          navigate challenges and ensure project success.
        </p>
      </div>

      <div onClick={handleClick}>
        <Arrow />
      </div>
    </div>
  );
}

export default React.memo(Home);
