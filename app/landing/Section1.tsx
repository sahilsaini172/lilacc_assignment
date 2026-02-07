import Image from "next/image";
import PrimaryButton from "../components/PrimaryButton";

const Section1 = () => {
  return (
    <div className="flex flex-col bg-secondary md:flex-row-reverse md:items-stretch" >
      <div className="w-full relative h-[clamp(320px,30vw,500px)] bg-secondary overflow-hidden md:w-1/2 md:h-auto">
        <Image
          src="/images/sec1.png"
          alt="dairy and coffee"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col md:w-1/2">
        <div className="flex-col flex py-12 px-8 md:pt-24 xl:pt-32 xl:px-12">
          <h2 className="mb-4">Live a fulfilling life</h2>
          <p className="mt-4">
            Life can be challenging—especially when you're trying to balance
            your personal and professional life.
          </p>
          <p className="mt-4">
            It's easy to feel like you're alone in facing these challenges, but
            I want you to know that I'm here to help.
          </p>
        </div>
        <PrimaryButton className="w-full border-b-0 border-x-0 mt-12">
          get in touch
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Section1;
