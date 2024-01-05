import { Box } from "@/elements";
import { MORE_MENU } from "./more-menu.data";
import { useId } from "react";

const MoreMenu = ({ info }) => {
  const id = useId();

  return (
    <Box display="flex" flexDirection="column" gap="1.5rem" p="1rem">
      {MORE_MENU.map(({ name, action, Icon }, index) => (
        <Box
          gap="1rem"
          display="flex"
          color="#000000"
          alignItems="center"
          key={`${id}_${index}`}
          onClick={action ? info[action]?.action : undefined}
        >
          <Box width="2rem" height="2rem">
            <Icon maxWidth="2rem" maxHeight="2rem" width="100%" />
          </Box>
          <Box>
            {name}
            {action === "shareAt" && info[action].add}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default MoreMenu;
