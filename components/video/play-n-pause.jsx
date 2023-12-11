import { Box } from "@/elements";
import { PauseSVG, PlaySVG } from "../svg";
import { useEffect, useState } from "react";

const PlayNPause = ({ videoRef }) => {
  const [playing, setPlaying] = useState(true);

  const togglePlay = (e) => {
    e.stopPropagation();

    const video = videoRef.current;

    if (video)
      setPlaying((value) => {
        if (value) {
          video.pause();
          return false;
        }

        video.play();
        return true;
      });
  };

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.addEventListener("play", (event) =>
        setPlaying(!event.target.paused)
      );

      return () =>
        video.removeEventListener("play", (event) =>
          setPlaying(!event.target.paused)
        );
    }
  }, []);

  return (
    <Box left="0.5rem" bottom="0.5rem" position="absolute" onClick={togglePlay}>
      {playing ? (
        <PauseSVG maxWidth="3rem" maxHeight="3rem" width="100%" />
      ) : (
        <PlaySVG maxWidth="3rem" maxHeight="3rem" width="100%" />
      )}
    </Box>
  );
};

export default PlayNPause;
