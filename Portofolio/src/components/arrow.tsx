import { Badge } from "./ui/badge";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { useState, useEffect } from 'react';

function Arrow() {
  const [showUpArrow, setShowUpArrow] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setShowUpArrow(true);
      } else {
        setShowUpArrow(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <Badge className="fixed bottom-5 right-5 z-50 size-10 flex justify-center align-middle">
      {showUpArrow ? <SlArrowUp size={'2em'} /> : <SlArrowDown size={'2em'} />}
    </Badge>
  );
}

export default Arrow;