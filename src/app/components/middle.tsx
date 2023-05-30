//"use client";
import { BsFillCheckCircleFill } from "react-icons/bs";
export default function Middle() {
  const c = "rgb(37 99 235)";
  const style = { color: c };
  const Icon = <BsFillCheckCircleFill style={style} />;
  return (
    <div className="py-8 bg-slate-50 my-8">
      <div className="text-center">
        <h2 className="font-bold text-3xl">what this course covers?</h2>
      </div>

      <ul className="flex flex-col gap-4 pt-8">
        <li className="h-48 flex justify-evenly gap-8">
          <div className="w-1/2 p-4 font-bold text-xl flex items-center justify-center  h-full border bg-blue-600 rounded-3xl  text-white">
            HTML and CSS
          </div>
          <div className="w-1/2  p-4 font-bold text-xl flex flex-col items-center justify-center  h-full border  rounded-3xl  text-black">
            <div>
              <p className="flex items-center">
                {Icon}
                <span className="ml-2">Basics of HTML5 and CSS3</span>
              </p>
              <p className="flex items-center">
                {Icon}
                <span className="ml-2">Responsive Desgin</span>
              </p>
              <p className="flex items-center">
                {Icon}
                <span className="ml-2">Flexbox</span>
              </p>
              <p className="flex items-center">
                {Icon}
                <span className="ml-2">Tailwind CSS</span>
              </p>
            </div>
          </div>
        </li>

        <li className="h-48 flex justify-evenly gap-8">
          <div className="w-1/2 p-4 font-bold text-xl flex items-center justify-center  h-full border bg-yellow-300 rounded-3xl  text-black">
            JavaScript
          </div>
          <div className="w-1/2  p-4 font-bold text-xl flex flex-col items-center justify-center  h-full border  rounded-3xl  text-black">
            <div>
              <p className="flex items-center">
                {Icon}
                <span className="ml-2">Basics of JavaScript</span>
              </p>
              <p className="flex items-center">
                {Icon}
                <span className="ml-2">ReactJS</span>
              </p>
              <p className="flex items-center">
                {Icon}
                <span className="ml-2">NextJS</span>
              </p>
              <p className="flex items-center">
                {Icon}
                <span className="ml-2">Tailwind CSS</span>
              </p>
            </div>
          </div>
        </li>
        {/* <li className="border">
          <div className="font-bold text-xl">Advance JavaScript</div>
        </li>
        <li className="border">
          <div className="font-bold text-xl">ReactJS and NextJS</div>
        </li>

        <li className="border">
          <div className="font-bold text-xl">Interview Preperation</div>
        </li>

        <li className="border">
          <div className="font-bold text-xl">Guest Lectures</div>
        </li> */}
      </ul>
    </div>
  );
}
