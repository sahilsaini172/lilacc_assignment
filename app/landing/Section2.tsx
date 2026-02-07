import Card from "../components/Card";

const cardData = [
  {
    id: 1,
    heading: "Self-Esteem",
    description:
      "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
    imgSrc: "/images/selfEsteem.png",
    imgWidth: 1920,
    imgHeight: 1281,
    imgAlt: "Man standing with coffee mug in hand.",
  },
  {
    id: 2,
    heading: "Relationships",
    description:
      "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
    imgSrc: "/images/relationships.png",
    imgWidth: 1920,
    imgHeight: 1281,
    imgAlt: "Woman sitting in an alley",
  },
  {
    id: 3,
    heading: "Burnout",
    description:
      "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
    imgSrc: "/images/burnout.png",
    imgWidth: 1920,
    imgHeight: 1281,
    imgAlt: "Woman searching a book",
  },
];

const Section2 = () => {
  return (
    <div className="flex flex-col py-21.5 lg:px-12">
      <h2 className="text-center px-3 pb-12.5">My Specialities</h2>
      <div className="flex flex-col px-6 gap-5 md:flex-row">
        {cardData.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            heading={item.heading}
            description={item.description}
            imgSrc={item.imgSrc}
            imgWidth={item.imgWidth}
            imgHeight={item.imgHeight}
            imgAlt={item.imgAlt}
          />
        ))}
      </div>
    </div>
  );
};

export default Section2;
