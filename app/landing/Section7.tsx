import React from "react";
import SecondaryButton from "../components/SecondaryButton";

const Section7 = () => {
  return (
    <div className="flex flex-col items-center bg-accent text-white  justify-center py-20.5 md:py-40 lg:py-80">
      <div className="flex flex-col py-21.5 px-8 items-center">
        <div className="py-12 px-8 text-center md:w-2/3">
          <h2 className=" mb-4">Get started today.</h2>
          <p className="mt-4">
            Ready to take the first step towards a happier, healthier you?
            Contact me to book your first session. I look forward to starting
            this therapeutic journey with you.
          </p>
        </div>
        <SecondaryButton className="xl:mt-24">get in touch</SecondaryButton>
      </div>
    </div>
  );
};

export default Section7;
