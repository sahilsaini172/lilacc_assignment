import Image from "next/image";
import AccordionGroup from "../components/AccordianGroup";

const faqData = [
  {
    id: 1,
    question: "Do you take insurance?",
    answer: "Answer goes here.",
  },
  {
    id: 2,
    question: "Do you offer online sessions?",
    answer: "Answer goes here.",
  },
  {
    id: 3,
    question: "How long is each session?",
    answer: "Answer goes here.",
  },
];

const Section5 = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-21.5 md:flex-row md:pl-24 md:gap-8 md:pb-21.5 lg:py-50 xl:py-100 xl:pl-32 2xl:pl-64 2xl:gap-32">
      <div className="h-fit relative">
        <Image
          src={"/images/sec5.png"}
          alt="Girl with flowers in hand"
          width={1000}
          height={1500}
          className="object-cover w-[clamp(132px,45vw,694px)] h-[clamp(199px,45vw,1041px)] rounded-t-full 2xl:w-[694px]"
        />
      </div>
      <div className="flex flex-col w-full py-12 px-8">
        <div className="flex flex-col">
          <h2 className="border-b pb-12">FAQs</h2>
        </div>
        <div><AccordionGroup items={faqData}  /></div>
      </div>
    </div>
  );
};

export default Section5;
