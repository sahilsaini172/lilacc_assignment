import PrimaryButton from "../components/PrimaryButton";

const Section3 = () => {
  return (
    <div className="relative flex flex-col bg-background-variant md:flex-row overflow-hidden">
      {/* Image Side */}
      <div className="relative w-full md:w-1/2 md:min-h-full">
        <img
          src="/images/sec3.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 md:bg-transparent bg-accent/75"></div>
      </div>

      {/* Content Side */}
      <div className="relative z-10 flex flex-col justify-center w-full md:w-1/2 py-12 px-8 md:py-16 md:px-12">
        <h2 className="mb-4">
          Therapy works best when clients feel respected, understood, and
          actively involved in the process.
        </h2>

        <p className="mt-4">
          My goal is not just symptom relief, but helping clients develop
          insight, resilience, and a stronger relationship with themselves over
          time.
        </p>

        <PrimaryButton className="mt-10 w-fit">Work With Me</PrimaryButton>
      </div>
    </div>
  );
};

export default Section3;
