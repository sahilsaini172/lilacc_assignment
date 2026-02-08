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
      className={`flex bg-primary flex-wrap items-center justify-center w-fit uppercase text-white px-12 py-4 rounded-xs cursor-pointer hover:bg-primary-hover transition-colors duration-400 ease-in ${className}`}
    >
      <a
        href=""
        className="no-underline text-[clamp(14px,7vw,12px)] font-medium"
      >
        {children}
      </a>
    </div>
  );
};

export default PrimaryButton;
