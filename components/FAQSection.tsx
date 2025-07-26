import { useState } from 'react';
import { FAQ } from '@/types';

interface FAQSectionProps {
    faq: FAQ[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ faq }) => {
    const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

    const toggleFAQ = (id: string): void => {
        setOpenItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    // Group FAQ by category
    const groupedFAQ = faq.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {} as Record<string, FAQ[]>);

    return (
        <section id="faq" className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-8">
                    {Object.entries(groupedFAQ).map(([category, items]) => (
                        <div key={category}>
                            <h3 className="text-2xl font-semibold mb-4 text-indigo-600">{category}</h3>
                            <div className="space-y-4">
                                {items.map((item) => (
                                    <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                        <div
                                            className="p-6 cursor-pointer hover:bg-gray-50 transition-colors flex justify-between items-center"
                                            onClick={() => toggleFAQ(item.id)}
                                        >
                                            <span className="font-semibold text-gray-800">{item.question}</span>
                                            <i className={`fas fa-chevron-down transition-transform duration-300 ${
                                                openItems[item.id] ? 'rotate-180' : ''
                                            }`}></i>
                                        </div>
                                        <div className={`overflow-hidden transition-all duration-300 ${
                                            openItems[item.id] ? 'max-h-48 pb-6' : 'max-h-0'
                                        }`}>
                                            <div className="px-6 text-gray-600 leading-relaxed">
                                                {item.answer}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
