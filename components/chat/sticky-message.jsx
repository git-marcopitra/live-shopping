import { Box } from "@/elements";
import { ChevronDownSVG } from "../svg";
import { useState } from "react";

const StickyMessage = ({ stickyMessage }) => {
  const [isExpandedText, setExpandText] = useState(false);

  const toggleExpandText = () => setExpandText((v) => !v);

  return (
    <Box
      p="1rem"
      mb="-1rem"
      display="grid"
      bg="#17191B66"
      position="relative"
      gridTemplateColumns="auto 1rem"
    >
      <div>
        <Box as="h3" textShadow="#000 1px 1px" fontWeight="500">
          {stickyMessage.author}
        </Box>
        <Box
          as="p"
          fontWeight="300"
          fontSize="0.875rem"
          textShadow="#000 1px 1px"
        >
          {stickyMessage.message.length > 48 && !isExpandedText
            ? `${stickyMessage.message.slice(0, 48)}...`
            : stickyMessage.message}
        </Box>
      </div>
      {stickyMessage.message.length > 48 && (
        <Box
          top="1rem"
          right="1rem"
          position="absolute"
          onClick={toggleExpandText}
          transform={isExpandedText ? "rotate(180deg)" : "rotate(0deg"}
        >
          <ChevronDownSVG maxWidth="1rem" maxHeight="1ren" width="100" />
        </Box>
      )}
    </Box>
  );
};

export default StickyMessage;
