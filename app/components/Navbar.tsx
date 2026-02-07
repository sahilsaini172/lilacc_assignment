"use client";

import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between px-4 py-5">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`size-8 relative *:duration-400 lg:hidden *:ease-in-out ${isOpen ? "scale-90" : "scale-100"}`}
        >
          <div
            className={`absolute h-px w-full bg-foreground  ${isOpen ? "-rotate-45 top-1/2 -translate-y-1/2" : "top-2.5"}`}
          />
          <div
            className={`absolute h-px w-full bg-foreground ${isOpen ? "rotate-45 top-1/2 -translate-y-1/2 " : "bottom-2.5"}`}
          />
        </div>
        <div className="text-[clamp(18px,2vw,46px)] leading-[clamp(21px,2vw,56px)] font-medium">
          Lilac Template
        </div>
        <div className="hidden lg:flex items-center gap-4 text-transparent pointer-events-none lg:text-foreground lg:pointer-events-auto  ">
          <a href="" className="no-underline">
            Blog
          </a>
          <a href="" className="no-underline ">
            Contact
          </a>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col justify-center items-center bg-background h-screen gap-2 duration-500 ease-in">
          <a href="" className="no-underline text-[27px]">
            Blog
          </a>
          <a href="" className="no-underline text-[27px]">
            Contact
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
