import { Roboto } from "next/font/google";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Outline from "./components/outline";
import Curriculum from "./components/curriculum";
import Price from "./components/price";
import FandQ from "./components/fandq";
import Footer from "./components/footer";
import CollapseCurriculum from "./components/collapse-curriculum";
import Calendar from "./calender";
import PayPalButton from "./components/paypalButton";
import Curriculum2 from "./components/curriculum-2";

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
        <Curriculum2 />
        {/* <Curriculum /> */}
        <CollapseCurriculum />
        <Price />
        <FandQ />
        <Footer />
      </main>
    </div>
  );
}
