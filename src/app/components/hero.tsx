import Link from "next/link";

export default function Hero() {
  const heading = "Hey future devs...";
  const text1 = `Bootcamp to make you job ready`;

  const text2 = `In the next 16 weeks, I will work with you to help you acquire the skills necessary to become a hirable frontend developer.`;
  return (
    <div className="md:hero bg-base-200 min-h-screen">
      <div className="md:hero-content flex-col lg:flex-row ">
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
          <button className="btn bg-btnColor text-secondary-content">
            <Link href="/checkout">Enrol now</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
