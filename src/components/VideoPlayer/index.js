import React, { useEffect, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { detectMob } from "../../functions/detectMob";

export default function VideoPlayer(video) {
  const [url, setUrl] = useState("");

  //   // for mobile interface usage
  const [width] = useWindowSize();
  const [vWidth, setvWidth] = useState("480");
  const [vHeight, setvHeight] = useState("270");
  useEffect(() => {
    if (width <= 1080 || detectMob()) {
      setvWidth("360");
      setvHeight("220");
    }
    if (width > 1080) {
      setvWidth("480");
      setvHeight("270");
    }
  }, [width]);
  useEffect(() => {
    function getId(url) {
      // function you can use:
      // console.log("new id", url.split("=", 8)[1].slice(0, -1));
      if (url.includes("=")) {
        let answer = url.split("=", 8)[1].slice(0);
        return answer;
      } else return "dQw4w9WgXcQ";
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
