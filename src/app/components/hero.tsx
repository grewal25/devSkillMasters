export default function Hero() {
  const heading = "Hey future devs...";
  const text1 = `Bootcamp to make you job ready`;

  const text2 = `In the next 16 weeks, I will work with you to help you acquire the skills necessary to become a hirable frontend developer.`;
  return (
    <div className="md:hero bg-base-200">
      <div className="md:hero-content flex-col lg:flex-row">
        <img
          src="/thumbnail.png"
          className="md:max-w-xs lg:max-w-xl md:rounded-lg md:shadow-2xl"
        />
        <div className="m-4 lg:m-0">
          <h1 className="text-5xl font-bold">{heading}</h1>
          <p className="py-6">
            <span className="font-bold text-2xl">{text1}</span>
            <br />
            <br />
            {text2}
          </p>
          <button className="btn btn-primary">Join the program</button>
        </div>
      </div>
    </div>
    // <div className="flex justify-evenly gap-4">
    //   <div className="w-1/2">
    //     <img src="/sample.avif" alt="image" />
    //   </div>
    //   <div className="items-center">
    //     <h1 className="font-bold text-3xl">{heading}</h1>
    //     <p>{text1}</p>
    //     <p>{text2}</p>
    //     <div className="pt-8">
    //       <button className="bg-blue-600 rounded-full border-2 px-16 text-white p-4">
    //         Join the program
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}
