import React from 'react';
import { FAQ } from '@/types/tour';

interface FAQItemProps {
  faq: FAQ;
  isExpanded: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ faq, isExpanded, onToggle }) => {
  return (
    <div className="faq-item">
      <button
        className="faq-question"
        onClick={onToggle}
        aria-expanded={isExpanded}
      >
        {faq.question}
        <span>{isExpanded ? '−' : '+'}</span>
      </button>
      {isExpanded && <div className="faq-answer">{faq.answer}</div>}
    </div>
  );
};

export default FAQItem;
