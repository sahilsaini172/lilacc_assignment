const SecondaryButton = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      role="button"
      className={`flex bg-background text-foreground flex-wrap items-center justify-center w-fit uppercase px-12 py-4 rounded-xs cursor-pointer hover:bg-background-variant transition-colors duration-400 ease-in ${className}`}
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

export default SecondaryButton;
