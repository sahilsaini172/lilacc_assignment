import Card from "../components/Card";

const cardData = [
  {
    id: 1,
    heading: "Trauma Therapy",
    description:
      "I work with adults who have experienced single-incident trauma as well as more complex, long-standing patterns that may stem from childhood, relationships, or chronic stress. My approach is paced carefully, with an emphasis on safety, stabilization, and helping clients feel more regulated in their daily lives.",
    imgSrc: "/images/selfEsteem.png",
    imgWidth: 1920,
    imgHeight: 1281,
    imgAlt: "Man standing with coffee mug in hand.",
  },
  {
    id: 2,
    heading: "Anxiety & Stress",
    description:
      "Whether you're experiencing constant worry, physical tension, or difficulty sleeping, we'll work together to understand both the emotional and physiological components of what you're experiencing using evidence-based methods including CBT, EMDR, and mindfulness-based practices.",
    imgSrc: "/images/relationships.png",
    imgWidth: 1920,
    imgHeight: 1281,
    imgAlt: "Woman sitting in an alley",
  },
  {
    id: 3,
    heading: "Burnout & Perfectionism",
    description:
      "I frequently support entrepreneurs, creatives, and professionals who feel disconnected from themselves after years of pushing through stress. Therapy can become a space to slow down, reconnect, and develop more sustainable ways of living and working.",
    imgSrc: "/images/burnout.png",
    imgWidth: 1920,
    imgHeight: 1281,
    imgAlt: "Woman searching a book",
  },
];

const Section2 = () => {
  return (
    <div className="flex flex-col py-20 md:px-4 md:py-24 lg:px-8 lg:py-28 xl:px-12 xl:py-32 2xl:px-16 2xl:py-36 bg-background">
      <h2 className="text-center mb-8 md:mb-12">
        My Specialities
      </h2>

      <div className="flex flex-col md:flex-row gap-6 px-6 items-stretch">
        {cardData.map((item) => (
          <div key={item.id} className="flex md:flex-1">
            <Card
              id={item.id}
              heading={item.heading}
              description={item.description}
              imgSrc={item.imgSrc}
              imgWidth={item.imgWidth}
              imgHeight={item.imgHeight}
              imgAlt={item.imgAlt}
              className="w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;