import { Chat, Navigation, PictureInPicture, ProgressBar } from "@/components";
import { ChevronUpSVG } from "@/components/svg";
import { Box } from "@/elements";

import { useState } from "react";

const VideoOverlay = ({
  videoRef,
  progressRef,
  progressBarRef,
  pictureInPicture,
  setPictureInPicture,
}) => {
  const [isMute, setMute] = useState(true);
  const [showChat, setShowChat] = useState(true);

  const onToggleChat = () => setShowChat((v) => !v);
  const onToggleMute = () => {
    setMute((v) => {
      videoRef.current.muted = !v;
      return !v;
    });
  };

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
      <PictureInPicture
        isMute={isMute}
        videoRef={videoRef}
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
          {showChat ? (
            <Chat />
          ) : (
            <Box
              p="1rem"
              display="flex"
              alignItems="center"
              onClick={() => setShowChat(true)}
            >
              <ChevronUpSVG maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
              <Box>Chat</Box>
            </Box>
          )}
          <ProgressBar
            videoRef={videoRef}
            progressRef={progressRef}
            progressBarRef={progressBarRef}
            onHandleProgress={onHandleProgress}
          />
          <Navigation
            toggleChat={onToggleChat}
            progressRef={progressRef}
            toggleSound={onToggleMute}
          />
        </Box>
      )}
    </Box>
  );
};

export default VideoOverlay;
