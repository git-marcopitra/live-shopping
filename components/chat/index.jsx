import { Box } from "@/elements";
import StickyMessage from "./sticky-message";
import { CHAT_MESSAGES, LONG_STICKY_MESSAGE } from "./chat.mock";
import BallonMessage from "./ballon-message";

const Chat = () => {
  const data = CHAT_MESSAGES.slice(-4) ;
  const stickyMessage = LONG_STICKY_MESSAGE;

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
        {data.map(({ id, ...chatMessage }, index) => (
          <BallonMessage
            key={id}
            {...chatMessage}
            isLast={index === 0 && data.length === 4}
          />
        ))}
      </Box>
      {stickyMessage && <StickyMessage stickyMessage={stickyMessage} />}
    </Box>
  );
};

export default Chat;
