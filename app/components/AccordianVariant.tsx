import { X } from "lucide-react";

type AccordionVariantProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  iconPosition?: "left" | "right";
  onToggle: () => void;
  className?: string;
};

const AccordionVariant = ({
  question,
  answer,
  isOpen,
  onToggle,
  iconPosition = "right",
  className,
}: AccordionVariantProps) => {
  return (
    <div
      className={`w-full  p-4 transition bg-background text-foreground rounded-md ${className}`}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-4 text-left"
      >
        {/* Icon LEFT */}
        {iconPosition === "left" && (
          <X
            size={16}
            className={`duration-400 ease-in-out ${isOpen ? "rotate-0" : "rotate-45"}`}
          />
        )}

        {/* Question */}
        <h3 className={`flex-1`}>{question}</h3>

        {/* Icon RIGHT */}
        {iconPosition === "right" && (
          <X
            size={16}
            className={`duration-400 ease-in-out ${isOpen ? "rotate-0" : "rotate-45"}`}
          />
        )}
      </button>

      {/* Content */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] pt-4" : "grid-rows-[0fr] pt-0"
        }`}
      >
        <p className="overflow-hidden text-muted-foreground">{answer}</p>
      </div>
    </div>
  );
};

export default AccordionVariant;
