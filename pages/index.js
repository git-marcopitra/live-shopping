import { Inter } from "next/font/google";
import LiveStream from "@/views";
import { Box } from "@/elements";

const inter = Inter({ subsets: ["latin"] });

const HomePage = () => (
  <Box
    as="main"
    minHeight="100vh"
    className={inter.className}
    background="linear-gradient(0deg, #888, #EEE)"
  >
    <LiveStream />
  </Box>
);

export default HomePage;
