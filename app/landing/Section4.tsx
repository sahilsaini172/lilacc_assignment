import Image from "next/image";
import PrimaryButton from "../components/PrimaryButton";

const Section4 = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-secondary pt-21.5 md:py-32 lg:py-40 xl:py-80 2xl:py-100 md:flex-row-reverse lg:gap-20">
      <div className="h-fit relative">
        <Image
          src={"/images/sec4.png"}
          alt="Girl with flowers in hand"
          width={1000}
          height={1500}
          className="object-cover w-[clamp(179px,35vw,653px)] h-[clamp(269px,55vw,979px)] rounded-t-full"
        />
        <img
          src="/images/whiteFlowers.png"
          alt="white flowers"
          className="aspect-square w-[clamp(99px,20vw,484px)] object-cover rounded-full absolute bottom-0 -right-10 z-20 md:-bottom-10 2xl:-bottom-20 2xl:-right-20"
        />
      </div>
      <div className="flex flex-col md:w-1/2">
        <div className="flex flex-col items-center text-left py-12 px-8 md:px-0 md:pr-8">
          <h2 className="mb-4 w-full">Hi, I'm Lilac</h2>
          <p className="mt-4">
            I'm committed to providing a safe and supportive environment where
            we can explore your thoughts, feelings, and behaviors. With empathy
            and guidance, we'll work together to navigate the challenges life
            throws your way.
          </p>
        <PrimaryButton className=" mt-8">
          let's chat
        </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Section4;
