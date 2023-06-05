import { Roboto } from "next/font/google";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Outline from "./components/outline";
import Curriculum from "./components/curriculum";
import Price from "./components/price";
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
        <Outline />
        <Curriculum />
        <Price />
        <FandQ />
        <Footer />
      </main>
    </div>
  );
}
