import { Chat, Navigation, ProgressBar, Video } from "@/components";
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
      position="fixed"
      display={hide ? "none" : "block"}
      {...(pictureInPicture
        ? {
            bottom: "1rem",
            right: "1rem",
            overflow: "hidden",
            borderRadius: "1rem",
            onClick: () => setPictureInPicture(false),
          }
        : { inset: "0" })}
    >
      <Video
        videoRef={videoRef}
        progressRef={progressRef}
        progressBarRef={progressBarRef}
        pictureInPicture={pictureInPicture}
      />
      <Box
        width="2rem"
        height="2rem"
        display="flex"
        bg="#0000001A"
        position="absolute"
        borderRadius="50%"
        alignItems="center"
        justifyContent="center"
        top={pictureInPicture ? "0.5rem" : "1rem"}
        right={pictureInPicture ? "0.5rem" : "1rem"}
        onClick={() =>
          pictureInPicture ? setHide(true) : setPictureInPicture(true)
        }
      >
        {pictureInPicture ? (
          <TimesSVG maxHeight="1rem" maxWidth="1rem" width="1rem" />
        ) : (
          <ChevronDownSVG maxHeight="1rem" maxWidth="1rem" width="100%" />
        )}
      </Box>
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
