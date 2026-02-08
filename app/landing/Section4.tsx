import Image from "next/image";
import PrimaryButton from "../components/PrimaryButton";

const Section4 = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-background py-12 px-6">
      <div className="flex flex-col items-center md:flex-row-reverse md:justify-center md:py-8">
        <div className="h-fit relative">
          <Image
            src={"/images/p2sec4.jpg"}
            alt="Girl with flowers in hand"
            width={1000}
            height={1500}
            className="object-cover w-[clamp(179px,35vw,653px)] h-[clamp(269px,55vw,979px)] rounded-t-full"
          />
        </div>
        <div className="flex flex-col items-center text-left py-12 px-8 md:w-1/2 md:pr-8">
          <h2 className="mb-4 w-full">My Therapeutic Approach</h2>
          <p className="mt-4">
            I take a warm, collaborative, and grounded approach to therapy.
            Sessions are structured enough to feel supportive, while still
            leaving space for reflection and depth. I integrate evidence-based
            methods to help clients understand both the emotional and
            physiological sides of what they're experiencing.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:grid-rows-2 w-full">
        <div className="flex flex-col px-4 py-8 bg-background-variant rounded-md border-l-4 border-l-primary">
          <h3>Cognitive-Behavioral Therapy (CBT)</h3>
          <p>
            Evidence-based techniques to identify and shift thought patterns
            that contribute to distress.
          </p>
        </div>
        <div className="flex flex-col px-4 py-8 bg-background-variant rounded-md border-l-4 border-l-primary">
          <h3>EMDR</h3>
          <p>
            Eye Movement Desensitization and Reprocessing for processing
            traumatic memories and experiences.
          </p>
        </div>
        <div className="flex flex-col px-4 py-8 bg-background-variant rounded-md border-l-4 border-l-primary">
          <h3>Mindfulness-Based Practices</h3>
          <p>
            Techniques to help you stay present and develop awareness of
            thoughts and emotions.
          </p>
        </div>
        <div className="flex flex-col px-4 py-8 bg-background-variant rounded-md border-l-4 border-l-primary">
          <h3>Body-Oriented Techniques</h3>
          <p>
            Understanding the physiological aspects of anxiety and trauma stored
            in the body.
          </p>
        </div>
      </div>
      <PrimaryButton className=" mt-8">let's chat</PrimaryButton>
    </div>
  );
};

export default Section4;
