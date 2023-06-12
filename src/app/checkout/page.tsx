"use client";
import PayPalButton from "../components/paypalButton";

export default function Page() {
  return (
    <div className="mx-0 md:mx-20 flex flex-col pt-20 md:pt-0 md:flex-row md:justify-evenly md:items-center md:min-h-screen gap-3 md:gap-4">
      <div className="pt-20 md:pt-0 text-center flex-1">
        <p>Front-end Masterclass</p>
        <p className="italic">
          (You still have 2 weeks after your first class to ask for full
          refund.)
        </p>
      </div>
      <div className="flex-1">
        <PayPalButton />
      </div>
    </div>
  );
}
