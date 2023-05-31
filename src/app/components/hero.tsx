export default function Hero() {
  const heading = "Hey future devs...";
  const text1 = `Unlock your potential and master the art of frontend development.`;

  const text2 = `Join our bootcamp to learn HTML, CSS, JavaScript, and React. 
  Build production like web apps. Get hirable skills.`;
  return (
    <div className="hero bg-base-200 hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="/thumbnail.png"
          className="max-w-sm lg:max-w-xl rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{heading}</h1>
          <p className="py-6">
            {text1}
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
