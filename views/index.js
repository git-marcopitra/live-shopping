import {
  Chat,
  Navigation,
  PictureInPicture,
  ProgressBar,
  Video,
} from "@/components";
import { ChevronDownSVG, TimesSVG } from "@/components/svg";
import { Box } from "@/elements";
import { useRef, useState } from "react";

const LiveStream = () => {
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const progressBarRef = useRef(null);

  const [pictureInPicture, setPictureInPicture] = useState(false);
  const [hide, setHide] = useState(false);

  const onHandleProgress = (e) => {
    const pos =
      (e.pageX -
        progressRef.current.offsetLeft -
        progressRef.current.offsetParent.offsetLeft) /
      progressRef.current.offsetWidth;

    videoRef.current.currentTime = pos * videoRef.current.duration;
  };

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
      <PictureInPicture
        videoRef={videoRef}
        pictureInPicture={pictureInPicture}
        setPictureInPicture={setPictureInPicture}
      />
      {!pictureInPicture && (
        <Box
          bottom="0"
          width="100%"
          display="flex"
          position="absolute"
          flexDirection="column"
        >
          <Chat />
          <ProgressBar
            progressRef={progressRef}
            progressBarRef={progressBarRef}
            onHandleProgress={onHandleProgress}
          />
          <Navigation />
        </Box>
      )}
    </Box>
  );
};

export default LiveStream;
