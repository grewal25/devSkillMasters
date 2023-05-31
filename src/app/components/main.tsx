import { BsFillCheckCircleFill } from "react-icons/bs";

export default function Main() {
  const c = "rgb(37 99 235)";
  const style = { color: c };
  const Icon = <BsFillCheckCircleFill style={style} />;

  return (
    <div>
      <div className="py-8 bg-slate-50 my-8">
        <div className="text-center">
          <h2 className="font-bold text-3xl pb-4">what this course covers?</h2>
        </div>
        <div className="flex justify-evenly gap-4 px-12">
          <div className="w-1/3 bg-white rounded-3xl h-64">
            <h2 className="text-center pt-4 font-bold text-2xl pb-4">
              HTML & CSS
            </h2>
            <div className="pl-4">
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
          <div className="w-1/3 bg-white rounded-3xl">
            <h2 className="text-center pt-4 font-bold text-2xl pb-4">
              Advance JavaScript
            </h2>
            <div className="pl-4">
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
          <div className="w-1/3 bg-white rounded-3xl ">
            <h2 className="text-center pt-4 font-bold text-2xl pb-4">
              React and NextJS
            </h2>
            <div className="pl-4">
              <p className="flex items-center">
                {Icon}
                <span className="ml-2">Functional Components</span>
              </p>
              <p className="flex items-center">
                {Icon}
                <span className="ml-2">React Hooks</span>
              </p>
              <p className="flex items-center">
                {Icon}
                <span className="ml-2">Context API</span>
              </p>
              <p className="flex items-center">
                {Icon}
                <span className="ml-2">Server Components</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
