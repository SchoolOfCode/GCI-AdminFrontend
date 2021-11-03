import React, { useEffect, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { detectMob } from "../../functions/detectMob";

export default function VideoPlayer(video) {
  const [url, setUrl] = useState("https://www.youtube.com/watch?v=dQw4w9WgXcQ");

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
      console.log("new id", url.split("=", 8)[1].slice(0, -1));
      let answer = url.split("=", 8)[1].slice(0, -1);
      return answer;
    }

    const link = getId(video.video);

    setUrl(`https://www.youtube.com/embed/${link}`);
  }, [url]);

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
