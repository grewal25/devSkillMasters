import Image from "next/image";
import { Roboto } from "next/font/google";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Middle from "./components/middle";
import Main from "./components/main";
import Outline from "./components/outline";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});
export default function Home() {
  return (
    <div>
      <main className="flex flex-col justify-start px-8">
        <Navbar />
        <Hero />
        <Main />
        <Outline />
        {/* <Middle /> */}
      </main>
    </div>
  );
}
