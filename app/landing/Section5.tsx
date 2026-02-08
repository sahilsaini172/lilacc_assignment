import Image from "next/image";
import AccordionGroup from "../components/AccordianGroup";

const faqData = [
  {
    id: 1,
    question: "Do you take insurance?",
    answer:
      "I am an out-of-network provider. I can provide you with a superbill that you can submit to your insurance for potential reimbursement, depending on your out-of-network benefits.",
  },
  {
    id: 2,
    question: "Do you offer online sessions?",
    answer:
      "Yes, I offer secure telehealth sessions for clients located anywhere in California, in addition to in-person sessions at my Santa Monica office.",
  },
  {
    id: 3,
    question: "How long is each session?",
    answer:
      "Standard therapy sessions are 50 minutes. Initial consultations may run slightly longer to ensure we have time to discuss your needs and determine if we're a good fit.",
  },
  {
    id: 4,
    question: "What should I expect in the first session",
    answer:
      "The first session is an opportunity for us to get to know each other. We'll discuss what brings you to therapy, your goals, and any concerns you have. This is also a time for you to ask questions and determine if my approach feels right for you.",
  },
];

const Section5 = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-tertiary-variant text-white p-12 md:flex-row md:gap-4 lg:p-16 lg:gap-8 xl:-20 xl:gap-12 2xl:p-24 2xl:gap-16">
      <div className="h-fit relative">
        <Image
          src={"/images/p2sec5.jpeg"}
          alt="Girl with flowers in hand"
          width={1000}
          height={1500}
          className="object-cover w-[clamp(132px,45vw,694px)] h-[clamp(199px,45vw,1041px)] rounded-t-full"
        />
      </div>
      <div className="flex flex-col w-full px-4 py-8">
        <div className="flex flex-col">
          <h2 className="mb-4">FAQs</h2>
        </div>
        <div>
          <AccordionGroup items={faqData} />
        </div>
      </div>
    </div>
  );
};

export default Section5;
