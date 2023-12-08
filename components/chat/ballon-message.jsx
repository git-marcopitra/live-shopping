import { Box } from "@/elements";
import { CHAT_MESSAGES } from "./chat.mock";
import { ReplySVG } from "../svg";

const BallonMessage = ({ author, message, replyTo, isLast }) => {
  const repliedMessage = CHAT_MESSAGES.find(
    ({ id: foundId }) => foundId === replyTo
  );

  return (
    <Box
      px="1rem"
      py="0.5rem"
      opacity={isLast ? 0.5 : 1}
      bg={`rgba(23, 25, 27, ${repliedMessage ? 0.3 : 0.2})`}
    >
      {repliedMessage && (
        <Box
          mb="1rem"
          pl="1rem"
          gap="0.25rem"
          display="grid"
          borderLeft="2px solid #fff"
          gridTemplateColumns="1.3rem auto"
        >
          <Box>
            <ReplySVG maxWidth="1.3rem" maxHeight="1.3rem" width="100%" />
          </Box>
          <Box>
            <Box
              as="h3"
              display="inline"
              fontWeight="500"
              textShadow="#000 1px 1px"
            >
              {repliedMessage.author}
            </Box>
            <Box
              as="p"
              display="inline"
              ml="0.25rem"
              fontWeight="300"
              textShadow="#000 1px 1px"
            >
              {repliedMessage.message}
            </Box>
          </Box>
        </Box>
      )}
      <Box as="h3" display="inline" fontWeight="500" textShadow="#000 1px 1px">
        {author}
      </Box>
      <Box
        as="p"
        display="inline"
        ml="0.25rem"
        fontWeight="300"
        textShadow="#000 1px 1px"
      >
        {message}
      </Box>
    </Box>
  );
};

export default BallonMessage;
