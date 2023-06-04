import Image from "next/image";
import { Roboto } from "next/font/google";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Middle from "./components/middle";
import Main from "./components/main";
import Outline from "./components/outline";
import Carousel from "./components/carousel";
import Curriculum from "./components/curriculum";
import Price from "./components/price";
import CarouselDefault from "./components/carousel-default";
import FandQ from "./components/fandq";
import Footer from "./components/footer";

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
        {/* <Main /> */}
        <Outline />
        {/* <CarouselDefault /> */}
        {/* <Carousel /> */}
        <Curriculum />
        <Price />
        <FandQ />
        <Footer />
        {/* <Middle /> */}
      </main>
    </div>
  );
}
