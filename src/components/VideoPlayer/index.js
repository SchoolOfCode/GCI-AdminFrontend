import React, { useEffect, useState } from "react";
import {useWindowSize} from "../../hooks/useWindowSize";
import { detectMob } from "../functions/detectMob";

export default function VideoPlayer(video) {
  const [url, setUrl] = useState("");

  //   // for mobile interface usage
  const [width, height] = useWindowSize();
  const [vWidth, setvWidth] = useState("480");
  const [vHeight, setvHeight] = useState("270");
  useEffect(() => {
    if (width <= 1080 || detectMob()) {
      setvWidth("240");
      setvHeight("135");
    }
    if (width > 1080) {
      setvWidth("480");
      setvHeight("270");
    }
  }, [width]);
  useEffect(() => {
    function getId(url) {
      // function you can use:

      return url.split("=")[1];
    }

    const link = getId("https://www.youtube.com/watch?v=7RE2z1yEymU");
    setUrl(`https://www.youtube.com/embed/${link}`);
  }, []);

  return (
    <iframe
      width={vWidth}
      height={vHeight}
      src={url}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
}
