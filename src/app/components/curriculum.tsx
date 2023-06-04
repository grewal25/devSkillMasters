export default function Curriculum() {
  const text = `This curriculum teaches everything you need to know to build modern, polished web experiences. It's a no-fluff distillation of the skills I've learned over 4+ years.;`;
  return (
    <div className="lg:px-20">
      <div className="text-center max-w-lg m-auto">
        <h2 className="font-bold text-2xl">Curriculum</h2>
        <p>{text}</p>
      </div>
      <div className="flex flex-col lg:hidden gap-y-4 items-center justify-center  md:gap-4 py-8">
        <div className="card min-w-full md:min-w-[50%] lg:w-96 bg-primary text-primary-content ">
          <div className="card-body text-center lg:text-start">
            <h2 className="font-bold text-2xl text-center underline lg:card-title">
              Month 1
            </h2>
            <p>Basics of HTML, CSS</p>
            <p>Responsive Design</p>
            <p>CSS FlexBox</p>
            <p>Intermediate JavaScript</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card min-w-full md:min-w-[50%] lg:w-96 bg-primary text-primary-content min-h-min">
          <div className="card-body text-center lg:text-start">
            <h2 className="font-bold text-2xl text-center underline lg:card-title">
              Month 2
            </h2>
            <p>ReactJS Basics</p>
            <p>React Hooks</p>
            <p>Fetching Data</p>
            <p>Project 1 and 2</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card min-w-full md:min-w-[50%] lg:w-96 bg-primary text-primary-content min-h-min">
          <div className="card-body text-center lg:text-start">
            <h2 className="font-bold text-2xl text-center underline lg:card-title">
              Month 3
            </h2>
            <p>NextJS</p>
            <p>Server Components</p>
            <p>Data fetching in NextJS</p>
            <p>Capstone Project</p>
            <p>Project 3</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card min-w-full md:min-w-[50%] lg:w-96 bg-primary text-primary-content min-h-min">
          <div className="card-body text-center lg:text-start">
            <h2 className="font-bold text-2xl text-center underline lg:card-title">
              Month 4
            </h2>
            <p>Technical Interview Preperation</p>
            <p>Behavioural Interview Preperation</p>
            <p>Resume Review</p>
            <p>LinkedIn profile setup</p>
            <p>One one One</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>

      {/* hide on small screen */}

      <div className="hidden lg:block">
        <div className="lg:flex lg:items-stretch lg:flex-row gap-y-4 items-center justify-center lg:justify-evenly md:gap-4 py-8">
          <div className="card min-w-full md:min-w-[50%] lg:w-96 bg-primary text-primary-content ">
            <div className="card-body text-center lg:text-start">
              <h2 className="font-bold text-2xl text-center underline lg:card-title">
                Month 1
              </h2>
              <p>Basics of HTML, CSS</p>
              <p>Responsive Design</p>
              <p>CSS FlexBox</p>
              <p>Intermediate JavaScript</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
          <div className="card min-w-full md:min-w-[50%] lg:w-96 bg-primary text-primary-content min-h-min">
            <div className="card-body text-center lg:text-start">
              <h2 className="font-bold text-2xl text-center underline lg:card-title">
                Month 2
              </h2>
              <p>ReactJS Basics</p>
              <p>React Hooks</p>
              <p>Fetching Data</p>
              <p>Project 1 and 2</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:items-stretch lg:flex-row gap-y-4 items-center justify-center lg:justify-evenly md:gap-4 py-8">
          <div className="card min-w-full md:min-w-[50%] lg:w-96 bg-primary text-primary-content min-h-min">
            <div className="card-body text-center lg:text-start">
              <h2 className="font-bold text-2xl text-center underline lg:card-title">
                Month 3
              </h2>
              <p>NextJS</p>
              <p>Server Components</p>
              <p>Data fetching in NextJS</p>
              <p>Capstone Project</p>
              <p>Project 3</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
          <div className="card min-w-full md:min-w-[50%] w-96 bg-primary text-primary-content min-h-min">
            <div className="card-body text-center lg:text-start">
              <h2 className="font-bold text-2xl text-center underline lg:card-title">
                Month 4
              </h2>
              <p>Technical Interview Preperation</p>
              <p>Behavioural Interview Preperation</p>
              <p>Resume Review</p>
              <p>LinkedIn profile setup</p>
              <p>One one One</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </div>
      </div>

      {/* hide on small screen */}
    </div>
  );
}
