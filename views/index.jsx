import { Video } from "@/components";
import { Box } from "@/elements";
import { useRef, useState } from "react";
import VideoOverlay from "./video-overlay";

const LiveStream = () => {
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const progressBarRef = useRef(null);
  const [pictureInPicture, setPictureInPicture] = useState(false);

  return (
    <Box
      inset="0"
      position="fixed"
      display={pictureInPicture ? "none" : "block"}
    >
      <Video
        videoRef={videoRef}
        progressRef={progressRef}
        progressBarRef={progressBarRef}
      />
      <VideoOverlay
        videoRef={videoRef}
        progressRef={progressRef}
        progressBarRef={progressBarRef}
        pictureInPicture={pictureInPicture}
        setPictureInPicture={setPictureInPicture}
      />
    </Box>
  );
};

export default LiveStream;
