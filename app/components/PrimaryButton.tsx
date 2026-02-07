import { ArrowRight } from "lucide-react";

const PrimaryButton = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      role="button"
      className={`flex flex-wrap items-center justify-center w-fit gap-2 uppercase text-sm font-semibold px-7.5 border border-foreground py-3.5 cursor-pointer hover:bg-foreground hover:text-white transition-colors duration-400 ease-in ${className}`}
    >
      <a
        href=""
        className="no-underline text-[clamp(14px,7vw,12px)] font-medium"
      >
        {children}
      </a>

      <ArrowRight size={16} className="ml-1.25" />
    </div>
  );
};

export default PrimaryButton;
