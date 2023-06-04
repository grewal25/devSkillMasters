import { BsFillCheckCircleFill } from "react-icons/bs";

import { BsCheckSquareFill } from "react-icons/bs";
export default function Price() {
  const c = "rgb(37 99 235)";
  const style = { color: c };
  const Icon = <BsCheckSquareFill size={25} />;

  return (
    <div>
      <div className="text-center py-8">
        <h2 className="font-bold text-2xl">Choose the plan suits your needs</h2>
        <p>
          Here at Dev Skill Masters, we focus on making students ready for job
          when they complete the program.
        </p>
      </div>
      <div className="flex flex-col md:items-stretch md:flex-row md:justify-evenly gap-y-8 md:gap-4 items-center justify-center ">
        <div className="card  w-96 bg-secondary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Personal Cohort!</h2>

            <span className="font-black text-3xl">$999</span>
            <div>
              <div>
                <div className="flex justify-start gap-4 py-2">
                  <div>{Icon}</div>
                  <div>
                    <p>24 weeks long</p>
                  </div>
                </div>
                <div className="flex justify-start gap-4 py-2">
                  <div>{Icon}</div>
                  <div>
                    <p>In-depth exploration of modern frontend frameworks</p>
                  </div>
                </div>
                <div className="flex justify-start gap-4 py-2">
                  <div>{Icon}</div>
                  <p>Collaboration on real-world projects</p>
                </div>
                <div className="flex justify-start gap-4 py-2">
                  <div>{Icon}</div>
                  <p>Personalized feedback and code reviews</p>
                </div>
                <div className="flex justify-start gap-4 py-2">
                  <div>{Icon}</div>
                  <p>Expert-level frontend development techniques</p>
                </div>
                <div className="flex justify-start gap-4 py-2">
                  <div>{Icon}</div>
                  <p>Networking opportunities with professionals</p>
                </div>
                <div className="flex justify-start gap-4 py-2">
                  <div>{Icon}</div>
                  <p>Advanced topics like server-side rendering</p>
                </div>
                <div className="flex justify-start gap-4 py-2">
                  <div>{Icon}</div>
                  <p>Resume Review</p>
                </div>
                <div className="flex justify-start gap-4 py-2">
                  <div>{Icon}</div>
                  <p>Interview Preperation</p>
                </div>
                <div className="flex justify-start gap-4 py-2">
                  <div>{Icon}</div>
                  <p>Automation Testing</p>
                </div>
                <div className="flex justify-start gap-4 py-2">
                  <div>{Icon}</div>
                  <p>Weekly 1-on-1</p>
                </div>
              </div>
            </div>
            <div className="justify-end text-center">
              <button className="btn btn-wide">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Best for Buck!</h2>

            <span className="font-black text-3xl">$350</span>
            <div>
              <div>
                <div className="flex justify-start gap-4 py-2">
                  <div>{Icon}</div>
                  <div>
                    <p>24 weeks long</p>
                  </div>
                </div>
                <div className="flex justify-start gap-4 py-2">
                  <div>{Icon}</div>
                  <div>
                    <p>In-depth exploration of modern frontend frameworks</p>
                  </div>
                </div>
                <div className="flex justify-start gap-4 py-2">
                  <div>{Icon}</div>
                  <p>Collaboration on real-world projects</p>
                </div>
                <div className="flex justify-start gap-4 py-2">
                  <div>{Icon}</div>
                  <p>Personalized feedback and code reviews</p>
                </div>
                <div className="flex justify-start gap-4 py-2">
                  <div>{Icon}</div>
                  <p>Expert-level frontend development techniques</p>
                </div>
                <div className="flex justify-start gap-4 py-2">
                  <div>{Icon}</div>
                  <p>Networking opportunities with professionals</p>
                </div>
                <div className="flex justify-start gap-4 py-2">
                  <div>{Icon}</div>
                  <p>Advanced topics like server-side rendering</p>
                </div>
                <div className="flex justify-start gap-4 py-2">
                  <div>{Icon}</div>
                  <p>Resume Review</p>
                </div>
                <div className="flex justify-start gap-4 py-2">
                  <div>{Icon}</div>
                  <p>Interview Preperation</p>
                </div>
              </div>
            </div>
            <div className="justify-end text-center py-20">
              <button className="btn btn-wide">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
