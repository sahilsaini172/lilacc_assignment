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
    <div
      key={id}
      className={`flex flex-col h-full p-8 bg-background-variant rounded-xs shadow-xl/20 shadow-foreground/10 md:items-center justify-start md:flex-1 md:pb-8 lg:p-12 ${className}`}
    >
      <div className="mb-8">
        <Image
          src={imgSrc}
          width={imgWidth}
          height={imgHeight}
          alt={imgAlt}
          className="object-cover rounded-full aspect-square w-[clamp(50px,20vw,551px)]"
        />
      </div>

      <h3 className="w-full mb-4">{heading}</h3>

      {/* this pushes content to fill height */}
      <p className="text-[clamp(15px,2vw,22px)] leading-[clamp(24px,2vw,35px)]">
        {description}
      </p>
    </div>
  );
};

export default Card;
