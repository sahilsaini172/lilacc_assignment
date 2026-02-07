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
  iconPosition = "left",
  className,
}: AccordionVariantProps) => {
  return (
    <div className="w-full border-b py-3 transition">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-6 text-left"
      >
        {/* Icon LEFT */}
        {iconPosition === "left" && (
          <span className="relative size-6 shrink-0">
            <span
              className={`absolute left-1/2 top-1/2 h-full w-px -translate-x-1/2 -translate-y-1/2 bg-foreground transition-transform duration-200 ${
                isOpen ? "rotate-90" : "rotate-0"
              }`}
            />
            <span className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 -translate-y-1/2 bg-foreground" />
          </span>
        )}

        {/* Question */}
        <h4 className={`flex-1 ${className}`}>{question}</h4>

        {/* Icon RIGHT */}
        {iconPosition === "right" && (
          <span className="relative size-6 shrink-0">
            <span
              className={`absolute left-1/2 top-1/2 h-full w-px -translate-x-1/2 -translate-y-1/2 bg-foreground transition-transform duration-200 ${
                isOpen ? "rotate-90" : "rotate-0"
              }`}
            />
            <span className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 -translate-y-1/2 bg-foreground" />
          </span>
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
