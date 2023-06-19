import { FaBeer } from "react-icons/fa";

export default function Curriculum2() {
  return (
    <div className="mb-6">
      <div className="text-center pb-4">The Bootcamp includes:</div>
      <div className="">
        <div className="grid grid-rows-1 md:grid-cols-2 bg-base-700 shadow-xl md:gap-4">
          <figure className="flex justify-center md:justify-end">
            <img src="/rocket.png" alt="Movie" className="pb-2 w-1/2" />
          </figure>
          <div className="flex flex-col justify-center p-4 md:p-0">
            <div className="max-w-screen-lg">
              <h2 className="font-extrabold text-xl ">
                Basics of HTML, CSS and JavaScript
              </h2>
              <p>We will start from the ground up.</p>
              <p>
                HTML, CSS and JavaScript are the backbone of any front-end
                project.
              </p>
              <p>
                In the first few weeks, we will make sure you have your basics
                completed before move to frameworks like React.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="grid grid-rows-1 md:grid-cols-2 bg-base-700 shadow-xl md:gap-4">
          <figure className="flex justify-center md:justify-end">
            <img src="/design.png" alt="Movie" className="pb-2 w-1/2" />
          </figure>
          <div className="flex flex-col justify-center p-4 md:p-0">
            <div className="max-w-screen-lg">
              <h2 className="font-extrabold text-xl ">Responsive Design</h2>
              <p>
                Understanding responsive design for any kind of web project is
                essentail.
              </p>
              <p>
                With CSS media queries and further utilizing Tailwind CSS, we
                will learn responsive design.
              </p>
              <p>
                Along with JavaScript, responsive design is useful in creating
                beautiful web pages.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="grid grid-rows-1 md:grid-cols-2 bg-base-700 shadow-xl md:gap-4">
          <figure className="flex justify-center md:justify-end">
            <img src="/react.png" alt="Movie" className="pb-2 w-1/2" />
          </figure>
          <div className="flex flex-col justify-center p-4 md:p-0">
            <div className="max-w-screen-lg">
              <h2 className="font-extrabold text-xl ">
                Fundamentals of ReactJS
              </h2>
              <p>We will cover some advance JavaScript topics in this part.</p>
              <p>
                React will give you super powers when it comes to building
                complex web apps.
              </p>
              <p>
                We will spend substantial amount of time learning the basics of
                React.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="grid grid-rows-1 md:grid-cols-2 bg-base-700 shadow-xl md:gap-4">
          <figure className="flex justify-center md:justify-end">
            <img src="/hooks.png" alt="Movie" className="pb-2 w-1/2" />
          </figure>
          <div className="flex flex-col justify-center p-4 md:p-0">
            <div className="max-w-screen-lg">
              <h2 className="font-extrabold text-xl ">Advance ReactJS</h2>
              <p>Hooks will come in help understanding complex logic.</p>
              <p>
                Modern React development is all about utilizing right hook. s
              </p>
              <p>
                There is a lot of Hooks that React gives to us. We will utilize
                those while building our apps.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="grid grid-rows-1 md:grid-cols-2 bg-base-700 shadow-xl md:gap-4">
          <figure className="flex justify-center md:justify-end">
            <img src="/real.png" alt="Movie" className="pb-2 w-1/2" />
          </figure>
          <div className="flex flex-col justify-center p-4 md:p-0">
            <div className="max-w-screen-lg">
              <h2 className="font-extrabold text-xl ">Team Project</h2>
              <p>
                Building projects are the real way of learning Front-end
                development.
              </p>
              <p>You will be building both solo and team projects.</p>
              <p>
                Building real world apps will give you confidence to work on a
                real project in your new job.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
