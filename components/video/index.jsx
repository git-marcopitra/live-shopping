import { Box } from "@/elements";
import { useEffect } from "react";

const Video = ({ videoRef, progressBarRef, progressRef }) => (
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

export default Video;
