import { Box } from "@/elements";
import { useEffect, useState } from "react";
import { PauseSVG, PlaySVG } from "../svg";
import PlayNPause from "./play-n-pause";

const Video = ({ videoRef, progressBarRef, progressRef, pictureInPicture }) => {
  useEffect(() => {
    const video = videoRef.current;
    const progress = progressRef.current;
    const progressBar = progressBarRef.current;

    if (video && progress && progressBar) {
      const updateProgressBar = () => {
        if (!progress.getAttribute("max"))
          progress.setAttribute("max", video.duration);

        progress.value = video.currentTime;

        progressBar.style.width = `${
          (video.currentTime / video.duration) * 100
        }%`;
      };

      video.addEventListener("timeupdate", updateProgressBar);

      return () => {
        video.removeEventListener("timeupdate", updateProgressBar);
      };
    }
  }, []);

  return (
    <Box position="relative">
      <Box
        loop
        muted
        autoPlay
        as="video"
        ref={videoRef}
        src="/video.mp4"
        type="video/mp4"
        poster="/poster.png"
        width={pictureInPicture ? "10rem" : "100vw"}
        height={pictureInPicture ? "17.7rem" : "100vh"}
      >
        <p>
          Your browser does not support HTML video. Here is a
          <a href="/video.mp4">link to the video</a> instead.
        </p>
      </Box>
      {pictureInPicture && <PlayNPause videoRef={videoRef} pictureInPicture={pictureInPicture} />}
    </Box>
  );
};

export default Video;
