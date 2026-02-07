import Image from "next/image";
import PrimaryButton from "../components/PrimaryButton";

const Section3 = () => {
  return (
    <div className="flex flex-col bg-tertiary md:flex-row md:items-stretch" >
      <div className="w-full relative h-[clamp(270px,30vw,500px)] bg-tertiary overflow-hidden md:w-1/2 md:h-auto">
        <Image
          src="/images/sec3.webp"
          alt="dairy and coffee"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col md:w-1/2">
        <div className="flex-col flex py-12 px-8">
          <h2 className="mb-4">
            You don’t have to do this all <i>alone</i>.
          </h2>
          <p className="mt-4">If you are facing any of these, there’s hope:</p>
          <ul className="list-disc list-inside pl-10 gap-1">
            <li>Persistent feelings of sadness or hopelessness</li>
            <li>Trouble focusing or making decisions</li>
            <li>Difficulty maintaining relationships</li>
            <li>Feeling constantly exhausted or unmotivated</li>
            <li>A pervasive sense of being overwhelmed</li>
          </ul>
          <p>
            With empathy and guidance, we'll work together to navigate the
            challenges life throws your way.
          </p>
        </div>
        <PrimaryButton className="w-full border-b-0 border-x-0 mt-12">
          work with me
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Section3;
