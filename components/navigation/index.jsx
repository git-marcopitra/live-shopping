import { BagSVG, DotsSVG, HeartSVG, ShirtSVG } from "@/components/svg";
import { Box } from "@/elements";

const Navigation = () => (
  <Box
    display="flex"
    gap="1.25rem"
    justifyContent="flex-end"
    mb="1rem"
    mr="1.5rem"
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
      alignItems="center"
      justifyContent="center"
    >
      <HeartSVG maxWidth="1.5rem" maxHeight="1.5rem" width="100%" />
    </Box>
  </Box>
);

export default Navigation;
