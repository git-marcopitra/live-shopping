import { Box } from "@/elements";
import { ChevronDownSVG, NoSoundSVG, TimesSVG } from "../svg";
import { useEffect } from "react";

const PictureInPicture = ({
  isMute,
  videoRef,
  setPictureInPicture,
}) => {
  const handlePIP = async (e) => {
    e.stopPropagation();
    e.target.disabled = true;
    try {
      if (!document.pictureInPictureEnabled)
        throw new Error("Picture-in-picture is not supported in your browser");

      const video = videoRef.current;

      if (!video) throw new Error("Video is not working");

      if (video === document.pictureInPictureElement) {
        await document.exitPictureInPicture();
        return setPictureInPicture(false);
      }

      await video.requestPictureInPicture();
      setPictureInPicture(true);
      video.play();
    } catch (err) {
      console.log(">> err :: ", err);
    } finally {
      e.target.disabled = true;
    }
  };

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.addEventListener(
        "leavepictureinpicture",
        () => setPictureInPicture(false),
        false
      );

      return () =>
        video.addEventListener(
          "leavepictureinpicture",
          () => setPictureInPicture(false),
          false
        );
    }
  }, []);

  return (
    <Box top="1rem" right="1rem" position="absolute" display="flex" gap="0.5rem">
      {isMute && (
        <Box
          width="2rem"
          height="2rem"
          display="flex"
          bg="#0000001A"
          borderRadius="50%"
          alignItems="center"
          justifyContent="center"
        >
          <NoSoundSVG maxHeight="1rem" maxWidth="1rem" width="100%" />
        </Box>
      )}
      <Box
        width="2rem"
        height="2rem"
        display="flex"
        bg="#0000001A"
        borderRadius="50%"
        alignItems="center"
        onClick={handlePIP}
        justifyContent="center"
      >
        <ChevronDownSVG maxHeight="1rem" maxWidth="1rem" width="100%" />
      </Box>
    </Box>
  );
};

export default PictureInPicture;
