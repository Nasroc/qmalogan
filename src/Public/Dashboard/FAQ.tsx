import { useState } from 'react';

export function FAQ() {
    const [current, setCurrent] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setCurrent(current === index ? null : index);
    };

    const faqs = [
        { question: "How can I pay for my appointment?", answer: "You can pay using credit card, debit card, or PayPal." },
        { question: "What can I expect at my first consultation?", answer: "You will meet with our expert to discuss your goals and design a personalized plan." },
        { question: "What are your opening hours?", answer: "We are open from 9:00 AM to 6:00 PM, Monday through Saturday." },
        { question: "Do I need a referral?", answer: "No referral is needed. You can book directly through our website." },
        { question: "Is the cost of the appointment covered by private health insurance?", answer: "Some insurance plans may cover part or all of the cost. Please check with your provider." }
    ];

    return (
        <section className="bg-gray-50 dark:bg-gray-800 py-16 px-8 rounded-2xl shadow-lg mt-12 mx-4 sm:mx-8 xl:mx-auto max-w-7xl transition-colors duration-300">
            <div className="container mx-auto">
                {/* Header */}
                <h2 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-white text-center mb-10">
                    Frequently Asked Questions
                </h2>

                {/* FAQ Items */}
                <div className="space-y-6">
                    {faqs.map((item, index) => (
                        <div 
                            key={index} 
                            className={`border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm transition-all duration-300 ${
                                current === index ? 'bg-gray-100 dark:bg-gray-900 shadow-md' : ''
                            }`}
                        >
                            {/* Button */}
                            <button 
                                className="w-full flex items-center justify-between text-left py-5 px-6 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition duration-300"
                                onClick={() => handleClick(index)}
                            >
                                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
                                    {item.question}
                                </h3>
                                <svg
                                    className={`w-6 h-6 text-yellow-500 transform transition-transform duration-300 ${
                                        current === index ? 'rotate-45' : 'rotate-0'
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={current === index ? "M12 4v16m8-8H4" : "M20 12H4"}></path>
                                </svg>
                            </button>

                            {/* Expandable Answer Section */}
                            <div
                                className={`transition-all duration-300 ${
                                    current === index ? 'max-h-40 opacity-100 py-4 px-6' : 'max-h-0 opacity-0 py-0 px-6'
                                }`}
                            >
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
