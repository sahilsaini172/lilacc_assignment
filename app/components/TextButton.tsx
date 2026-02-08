import { ArrowRight } from "lucide-react";

const TextButton = ({
  className,
  children = "bg-primary text-white",
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      role="button"
      className={`flex group items-center justify-center w-fit uppercase gap-2 px-12 py-4 rounded-xs cursor-pointer transition-colors duration-400 ease-in ${className}`}
    >
      <a
        href=""
        className="no-underline text-[clamp(14px,7vw,12px)] font-medium"
      >
        {children}
      </a>
      <ArrowRight size={16} className="group-hover:ml-2 group-hover:scale-120 duration-400 ease-in" />
    </div>
  );
};

export default TextButton;
