import { Box } from "@/elements";
import { SOCIAL_MEDIA } from "./share-menu.data";
import { useId } from "react";

const ShareMenu = () => {
  const id = useId();

  return (
    <Box>
      <Box>
        {SOCIAL_MEDIA.map(({ Icon, name }, index) => (
          <Box display="flex" key={`${id}_${index}`}>
            <Box>
              <Icon maxHeight="3rem" maxWidth="3rem" width="100%" />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ShareMenu;
