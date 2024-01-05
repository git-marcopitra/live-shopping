import { Box } from "@/elements";
import { useInstallProgressBar } from "@/hooks/use-install-progress-bar";

const ProgressBar = ({
  videoRef,
  progressRef,
  progressBarRef,
  onHandleProgress,
}) => {
  useInstallProgressBar(videoRef, progressRef, progressBarRef);

  return (
    <Box
      ref={progressRef}
      position="relative"
      onMouseDown={onHandleProgress}
      nHover={{
        ".progressBarPointer": {
          transform: "scale(200%)",
        },
      }}
    >
      <Box
        min="0"
        my="1rem"
        value="0"
        width="100%"
        border="none"
        bg="#ffffff66"
        display="block"
        height="0.25rem"
        borderRadius="2px"
      >
        <Box
          width="0%"
          bg="#3FA496"
          display="flex"
          height="0.25rem"
          alignItems="center"
          ref={progressBarRef}
          justifyContent="flex-end"
        >
          <Box
            draggable
            bg="#3FA496"
            width="0.4rem"
            height="0.825rem"
            borderRadius="0.25rem"
            onDrag={onHandleProgress}
            className="progressBarPointer"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ProgressBar;
