import { BagSVG, DotsSVG, HeartSVG, ShirtSVG } from "@/components/svg";
import { Box } from "@/elements";

const Navigation = () => {
  const sendHeart = () => {};

  return (
    <Box
      mb="1rem"
      mr="1.5rem"
      gap="1.25rem"
      display="flex"
      justifyContent="flex-end"
    >
      <Box
        height="1.5rem"
        width="1.5rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
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
        onCLick={sendHeart}
        alignItems="center"
        justifyContent="center"
      >
        <HeartSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
      </Box>
    </Box>
  );
};

export default Navigation;
