export default function Curriculum() {
  const text = `This curriculum teaches everything you need to know to build modern, polished web experiences. It's a no-fluff distillation of the skills I've learned over 15 years.;`;
  return (
    <div>
      <div className="text-center max-w-lg m-auto">
        <h2 className="font-bold text-2xl">Curriculum</h2>
        <p>{text}</p>
      </div>
      <div className="flex flex-col md:flex-row gap-y-4 items-center justify-center md:justify-evenly md:gap-4 py-8">
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Week 1</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Week 2</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Week3</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Week 1</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Week 2</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Week3</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col md:flex-row gap-y-4 items-center justify-centermd:justify-evenly md:gap-4 py-8">
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Week 1</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Week 2</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Week3</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
