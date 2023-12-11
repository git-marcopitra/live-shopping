import { Box } from "@/elements";
import { ChevronDownSVG, TimesSVG } from "../svg";
import { useEffect } from "react";

const PictureInPicture = ({
  videoRef,
  pictureInPicture,
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
    <Box
      width="2rem"
      height="2rem"
      display="flex"
      bg="#0000001A"
      position="absolute"
      borderRadius="50%"
      alignItems="center"
      onClick={handlePIP}
      justifyContent="center"
      top={pictureInPicture ? "0.5rem" : "1rem"}
      right={pictureInPicture ? "0.5rem" : "1rem"}
    >
      {pictureInPicture ? (
        <TimesSVG maxHeight="1rem" maxWidth="1rem" width="1rem" />
      ) : (
        <ChevronDownSVG maxHeight="1rem" maxWidth="1rem" width="100%" />
      )}
    </Box>
  );
};

export default PictureInPicture;
