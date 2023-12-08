import Image from "next/image";
import { Inter } from "next/font/google";
import LiveStream from "@/views";

const inter = Inter({ subsets: ["latin"] });

const Home = () => (
  <main className={inter.className}>
    <LiveStream />
  </main>
);

export default Home;
