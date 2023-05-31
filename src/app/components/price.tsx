import { BsFillCheckCircleFill } from "react-icons/bs";

import { BsCheckSquareFill } from "react-icons/bs";
export default function Price() {
  const c = "rgb(37 99 235)";
  const style = { color: c };
  const Icon = <BsCheckSquareFill size={25} />;

  return (
    <div>
      <div className="text-center py-8">
        <h2 className="font-bold text-2xl">
          Designed for business teams like yours
        </h2>
        <p>
          Here at Flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
      </div>
      <div className="flex justify-evenly gap-4">
        <div className="card w-96 bg-secondary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Individual!</h2>
            <p>Best option for personal use & for your next project.</p>
            <span className="font-black text-3xl">$5000/mo</span>
            <div>
              <div>
                <div className="flex justify-start gap-4 py-2">
                  <div>{Icon}</div>
                  <div>Individual configuration</div>{" "}
                </div>
                <div className="flex justify-start gap-4 py-2">
                  <div>{Icon}</div>
                  <div>Individual configuration</div>{" "}
                </div>
                <div className="flex justify-start gap-4 py-2">
                  <div>{Icon}</div>
                  <div>Individual configuration</div>{" "}
                </div>
                <div className="flex justify-start gap-4 py-2">
                  <div>{Icon}</div>
                  <div>Individual configuration</div>{" "}
                </div>
                <div className="flex justify-start gap-4 py-2">
                  <div>{Icon}</div>
                  <div>Individual configuration</div>{" "}
                </div>
              </div>
            </div>
            <div className="card-actions justify-end">
              <button className="btn">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Cohort!</h2>
            <p>Relevant for multiple users, extended & premium support.</p>
            <div className="card-actions justify-end">
              <button className="btn">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-accent text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Cohort+</h2>
            <p>Best for large scale uses and extended redistribution rights.</p>
            <div className="card-actions justify-end">
              <button className="btn">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
