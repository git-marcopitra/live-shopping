import {
  BagSVG,
  DotsSVG,
  HeartSVG,
  ShirtSVG,
  TimesSVG,
} from "@/components/svg";
import { Box } from "@/elements";
import { useState } from "react";
import MoreMenu from "../menu/more-menu";

const Navigation = ({ progress, toggleChat, toggleSound }) => {
  const sendHeart = () => {};
  const [content, setContent] = useState(null);

  return (
    <>
      {content && (
        <Box
          p="1rem"
          left="0"
          right="0"
          bottom="0"
          bg="white"
          display="flex"
          position="absolute"
          flexDirection="column"
          borderTopLeftRadius="1rem"
          borderTopRightRadius="1rem"
        >
          <Box width="2rem" height="2rem" color="#17191B" alignSelf="flex-end">
            <TimesSVG
              width="100%"
              maxWidth="2rem"
              maxHeight="2rem"
              onClick={() => setContent(null)}
            />
          </Box>
          {content === "menu" && (
            <MoreMenu
              info={{
                share: { action: () => setContent("share") },
                shareAt: { action: () => setContent("shareAt"), add: progress },
                chat: {
                  action: () => {
                    toggleChat();
                    setContent(null);
                  },
                },
                sound: {
                  action: () => {
                    toggleSound();
                    setContent(null);
                  },
                },
              }}
            />
          )}
        </Box>
      )}
      <Box
        mb="1rem"
        mr="1.5rem"
        gap="1.25rem"
        display="flex"
        justifyContent="flex-end"
      >
        <Box
          display="flex"
          width="1.5rem"
          height="1.5rem"
          alignItems="center"
          justifyContent="center"
          onClick={() => setContent("menu")}
        >
          <DotsSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
        </Box>
        <Box
          height="1.5rem"
          width="1.5rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <ShirtSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
        </Box>
        <Box
          height="1.5rem"
          width="1.5rem"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <BagSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
        </Box>
        <Box
          height="1.5rem"
          width="1.5rem"
          display="flex"
          onClick={sendHeart}
          alignItems="center"
          justifyContent="center"
        >
          <HeartSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
        </Box>
      </Box>
    </>
  );
};

export default Navigation;
