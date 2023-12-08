import { Chat, Navigation, ProgressBar, Video } from "@/components";
import { ChevronDownSVG } from "@/components/svg";
import { Box } from "@/elements";
import { useEffect, useRef } from "react";

const LiveStream = () => {
  const videoRef = useRef(null);
  const progressRef = useRef(null);
  const progressBarRef = useRef(null);

  const onHandleProgress = (e) => {
    const pos =
      (e.pageX -
        progressRef.current.offsetLeft -
        progressRef.current.offsetParent.offsetLeft) /
      progressRef.current.offsetWidth;

    videoRef.current.currentTime = pos * videoRef.current.duration;
  };

  return (
    <Box position="relative">
      <Video
        videoRef={videoRef}
        progressRef={progressRef}
        progressBarRef={progressBarRef}
      />
      <Box
        top="1rem"
        right="1rem"
        bg="#0000001A"
        width="2rem"
        height="2rem"
        display="flex"
        position="absolute"
        borderRadius="50%"
        alignItems="center"
        justifyContent="center"
      >
        <ChevronDownSVG maxHeight="1rem" maxWidth="1rem" width="1rem" />
      </Box>
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
    </Box>
  );
};

export default LiveStream;
