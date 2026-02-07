import Image from "next/image";
import PrimaryButton from "../components/PrimaryButton";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 md:flex-row gap-12 lg:gap-24 xl:gap-32 xl:justify-start xl:px-12 py-12 md:py-24 lg:py-32 xl:py-64">
      <div className="w-[179px] h-[269px] md:w-[clamp(179px,40vw,859px)] md:h-[clamp(269px,60vw,1289px)] rounded-t-full overflow-hidden mb-2">
        <Image
          src={"/images/fluidImage.png"}
          alt="Girl with flowers in hand"
          width={1000}
          height={1500}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col items-center text-center gap-8 md:gap-4 lg:-mt-24">
        <h1>
          Live your life
          <br /> in full bloom
        </h1>
        <p>Therapy for Adults in Minneapolisx, MN.</p>
        <PrimaryButton className="">Connect with me</PrimaryButton>
      </div>
    </div>
  );
};

export default Hero;
