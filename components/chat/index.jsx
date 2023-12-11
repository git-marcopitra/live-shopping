import { Box } from "@/elements";
import StickyMessage from "./sticky-message";
import { CHAT_MESSAGES, LONG_STICKY_MESSAGE } from "./chat.mock";
import BallonMessage from "./ballon-message";
import { useState } from "react";

const Chat = () => {
  const data = CHAT_MESSAGES.slice(-4);
  const stickyMessage = LONG_STICKY_MESSAGE;

  const [isExpandedText, setExpandText] = useState(false);

  const toggleExpandText = () => setExpandText((v) => !v);

  return (
    <Box color="white">
      <Box
        px="0.5rem"
        gap="0.5rem"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        maxWidth="calc(100vw - 6rem)"
      >
        {!isExpandedText &&
          stickyMessage.message.length > 48 &&
          data.map(({ id, ...chatMessage }, index) => (
            <BallonMessage
              key={id}
              {...chatMessage}
              isLast={index === 0 && data.length === 4}
            />
          ))}
      </Box>
      {stickyMessage && (
        <StickyMessage
          stickyMessage={stickyMessage}
          isExpandedText={isExpandedText}
          toggleExpandText={toggleExpandText}
        />
      )}
    </Box>
  );
};

export default Chat;
