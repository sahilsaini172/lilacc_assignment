import Image from "next/image";

type CardProps = {
  id: number;
  heading: string;
  description: string;
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
  imgAlt: string;
  className?: string;
};

const Card = ({
  id = 0,
  heading = "Card Heading",
  description = "Card description",
  imgSrc,
  imgWidth,
  imgHeight,
  imgAlt,
  className,
}: CardProps) => {
  return (
    <div key={id} className="flex flex-col flex-1 border p-5 bg-secondary">
      <h3 className="w-full">{heading}</h3>
      <p className="mt-8">
        {description}
        <br />
        <br />
      </p>
      <div className="mt-auto flex justify-center">
        <Image
          src={imgSrc}
          width={imgWidth}
          height={imgHeight}
          alt={imgAlt}
          className="object-cover rounded-full aspect-square w-[clamp(190px,60vw,551px)]"
        />
      </div>
    </div>
  );
};

export default Card;
