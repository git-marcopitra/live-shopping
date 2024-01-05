import { useEffect } from "react";

export const useInstallProgressBar = (
  videoRef,
  progressRef,
  progressBarRef
) => {
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
};
