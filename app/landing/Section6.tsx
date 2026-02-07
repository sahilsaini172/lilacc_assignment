import AccordionGroup from "../components/AccordianGroup";
const professionalData = [
  {
    id: 1,
    question: "Education",
    answer:
      "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
  },
  {
    id: 2,
    question: "Licensure",
    answer:
      "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
  },
  {
    id: 3,
    question: "Certifications",
    answer:
      "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
  },
];

const Section6 = () => {
  return (
    <div className="flex flex-col items-center bg-secondary  justify-center py-20.5 md:py-50 lg:py-80">
      <div className="flex flex-col py-21.5  px-8 md:w-1/2">
        <h2 className="text-center border-b pb-12">
          My Professional Background
        </h2>
        <AccordionGroup
          iconPosition="right"
          className="text-[clamp(21px,3vw,31px)] font-normal"
          items={professionalData}
        />
      </div>
    </div>
  );
};

export default Section6;
