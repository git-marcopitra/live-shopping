import { Box } from "@/elements";
import { useEffect } from "react";

const Video = ({ videoRef, progressBarRef, progressRef }) => {
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
    <Box
      loop
      muted
      autoPlay
      as="video"
      width="100vw"
      height="100vh"
      ref={videoRef}
      src="/video.mp4"
      type="video/mp4"
      poster="/poster.png"
    >
      <p>
        Your browser does not support HTML video. Here is a
        <a href="/video.mp4">link to the video</a> instead.
      </p>
    </Box>
  );
};

export default Video;
