export default function Outline() {
  return (
    <div>
      <div className="text-center pb-6 font-bold text-2xl underline capitalize">
        what you will build
      </div>
      <div className="text-center pb-6 font-bold">2 Real World Projects</div>
      <div className="flex justify-evenly">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="/car-2.jpeg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="/car-2.jpeg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="hero min-h-screen bg-base-200 my-8">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="/car-2.jpeg" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Capstone Project!</h1>
            <p className="py-6">
              You will be put in a group of other students and at the end of the
              project you will complete a capstone project.
            </p>
            <button className="btn btn-primary">Join the program</button>
          </div>
        </div>
      </div>
    </div>
  );
}
