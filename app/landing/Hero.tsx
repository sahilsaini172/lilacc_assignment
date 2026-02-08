import Image from "next/image";
import PrimaryButton from "../components/PrimaryButton";

const Hero = () => {
  return (
    <div className="min-h-screen bg-background text-foreground-variant flex flex-col items-center justify-center p-4 gap-4 md:flex-row md:px-8 md:gap-8 lg:gap-12 lg:py-12 lg:px-12 xl:gap-24 xl:px-24 xl:py-24 2xl:gap-32 2xl:px-32 2xl:py-32">
      <div className="w-[179px] h-[269px] md:w-[clamp(179px,40vw,859px)] md:h-[clamp(269px,60vw,1289px)] rounded-t-full overflow-hidden mb-2">
        <Image
          src={"/images/p2sec1.jpg"}
          alt="Dr. Maya Reynolds"
          width={1024}
          height={1536}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col items-center text-center gap-8 md:gap-4 lg:-mt-24">
        <h1 className="font-heading">
          Find clarity in
          <br /> the complexity
        </h1>
        <p className="">
          Therapy for Adults navigating anxiety, trauma and burnout in Santa
          Monica, CA.
        </p>
        <PrimaryButton className="">Schedule a consultation</PrimaryButton>
      </div>
    </div>
  );
};

export default Hero;
