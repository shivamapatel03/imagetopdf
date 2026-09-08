'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionItemProps {
  question: string;
  answer: string;
  isOpenDefault?: boolean;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpenDefault = false,
}) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  return (
    <div className="border-b border-gray-200 py-4 transition-colors">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left font-medium text-black focus:outline-hidden py-1 group"
        aria-expanded={isOpen}
      >
        <span className="text-base sm:text-lg font-semibold pr-4 text-gray-900 group-hover:text-[#4D4AE8] transition-colors">
          {question}
        </span>
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-200 transition-transform duration-200 ${
            isOpen ? 'rotate-180 bg-gray-50' : 'bg-white'
          }`}
        >
          <ChevronDown className="h-4 w-4 text-gray-600" />
        </span>
      </button>
      {isOpen && (
        <div className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed pr-8 animate-in fade-in slide-in-from-top-1 duration-200">
          {answer}
        </div>
      )}
    </div>
  );
};

export interface AccordionProps {
  items: { question: string; answer: string }[];
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, className = '' }) => {
  return (
    <div className={`divide-y divide-gray-100 ${className}`}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpenDefault={index === 0}
        />
      ))}
    </div>
  );
};
