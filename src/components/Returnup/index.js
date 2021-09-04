import React, { useEffect, useState } from "react";
import { Returned } from "./styles";
import { ChevronUpIcon } from "@heroicons/react/solid";
function Returnup() {
  const [scroll, setScroll] = useState(0);

  const getScroll = () => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  };
  useEffect(() => {
    getScroll();
    return () => getScroll();
  });
  return (
    <Returned scroll={scroll > 0 ? true : false}>
      <a href="#header">
        <div>
          <ChevronUpIcon width="40" />
        </div>
      </a>
    </Returned>
  );
}

export default Returnup;
