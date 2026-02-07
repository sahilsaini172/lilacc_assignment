"use client";

import { useState } from "react";
import AccordionVariant from "./AccordianVariant";

export type AccordionItem = {
  id: number;
  question: string;
  answer: string;
};

type AccordionGroupProps = {
  items: AccordionItem[];
  iconPosition?: "left" | "right";
  className?: string;
};

const AccordionGroup = ({
  items,
  iconPosition = "left",
  className,
}: AccordionGroupProps) => {
  const [openId, setOpenId] = useState<number | null>(null);

  function handleToggle(id: number) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <div className={`w-full`}>
      {items.map((item) => (
        <AccordionVariant
          key={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={openId === item.id}
          onToggle={() => handleToggle(item.id)}
          iconPosition={iconPosition}
          className={className}
        />
      ))}
    </div>
  );
};

export default AccordionGroup;
