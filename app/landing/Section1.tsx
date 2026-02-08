import Image from "next/image";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import TextButton from "../components/TextButton";

const Section1 = () => {
  return (
    <div className="flex flex-col bg-secondary md:flex-row-reverse md:items-stretch">
      <div className="w-full relative h-[clamp(420px,30vw,500px)] bg-secondary overflow-hidden md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 md:h-auto">
        <Image
          src="/images/maya.png"
          alt="Lord Buddha Statue"
          fill
          className="object-cover object-top"
        />
      </div>
      <div className="flex flex-col md:w-1/2 lg:flex-1 bg-tertiary text-foreground">
        <div className="flex-col flex py-12 px-8 md:pt-24 xl:pt-32 xl:px-12">
          <h2 className="mb-4">A warm, collaborative approach to healing</h2>
          <p className="mt-4">
            I'm a licensed clinical psychologist based in Santa Monica,
            California, offering therapy for adults who feel overwhelmed by
            anxiety, stress, or the lingering effects of past experiences.
          </p>
          <p className="mt-2">
            Many of the people I work with are high-achieving, thoughtful, and
            self-aware—but internally feel exhausted, stuck in overthinking, or
            emotionally on edge.
          </p>
          <p className="mt-2">
            My work often focuses on anxiety, panic, trauma, and burnout.
            Clients frequently come to me feeling "functional" on the outside
            while quietly struggling with constant worry, tension in their body,
            difficulty sleeping, or a sense that they're always bracing for
            something to go wrong.
          </p>
        </div>
        <TextButton className="text-foreground hover:text-foreground-variant w-full">
          get in touch
        </TextButton>
      </div>
    </div>
  );
};

export default Section1;
