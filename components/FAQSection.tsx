'use client';

import React, { useState } from 'react';
import { FAQ } from '@/types/tour';
import FAQItem from './FAQItem';
import {useTranslations} from "next-intl";

interface FAQSectionProps {
  faqs: FAQ[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };
  const t = useTranslations('FAQ');

  return (
      <section className="section faq-section" id="faqSection">
      <div className="container">
        <h2 className="section-title">{t('title')}</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isExpanded={expandedFAQ === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
