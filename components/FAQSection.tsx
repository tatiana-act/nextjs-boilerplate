import React, { useState } from 'react';
import { FAQ } from '@/types/tour';
import FAQItem from './FAQItem';

interface FAQSectionProps {
    faqs: FAQ[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
    const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setExpandedFAQ(expandedFAQ === index ? null : index);
    };

    return (
        <section className="section faq-section">
            <div className="container">
                <h2 className="section-title">Ответы на часто задаваемые вопросы</h2>
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