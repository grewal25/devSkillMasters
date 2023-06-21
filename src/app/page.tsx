import { Roboto } from "next/font/google";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Outline from "./components/outline";
import Curriculum from "./components/curriculum";
import Price from "./components/price";
import FandQ from "./components/fandq";
import Footer from "./components/footer";
import CollapseCurriculum from "./components/collapse-curriculum";
import PayPalButton from "./components/paypalButton";
import Curriculum2 from "./components/curriculum-2";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});
export default function Home() {
  return (
    <div>
      <main className="flex flex-col justify-start">
        <Navbar />
        <Hero />
        <div className="px-8">
          <Outline />
          <Curriculum2 />
          <CollapseCurriculum />
          <Price />
          <FandQ />
          <Footer />
        </div>
      </main>
    </div>
  );
}
