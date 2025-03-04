import { useState } from 'react';

export function FAQ() {
    const [current, setCurrent] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setCurrent(current === index ? null : index);
    };

    return (
        <section className="bg-gray-900 justify-center object-center items-center mt-12 mx-[10%] py-12 px-10 rounded-lg shadow-lg">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold lg:text-3xl text-white">FAQ's</h1>

                <hr className="my-6 border-gray-700" />

                {[
                    { question: "How can I pay for my appointment ?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa." },
                    { question: "What can I expect at my first consultation ?", answer: "Lorem ipsum dolor sit amet consectetur  Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa." },
                    { question: "What are your opening hours ?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa." },
                    { question: "Do I need a referral ?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit inima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa." },
                    { question: "Is the cost of the appointment covered by private health insurance ?", answer: "dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa." }
                ].map((item, index) => (
                    <div key={index}>
                        <button 
                            className="flex items-center focus:outline-none hover:bg-gray-800 p-1 rounded-lg w-full"
                            onClick={() => handleClick(index)}
                        >
                            <svg className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={current === index ? "M12 4v16m8-8H4" : "M20 12H4"}></path>
                            </svg>
                            <h1 className="mx-4 text-xl text-white">{item.question}</h1>
                        </button>

                        <div className={`flex mt-8 md:mx-10 ${current === index ? '' : 'hidden'}`}>
                            <span className="border border-blue-500"></span>

                            <p className="max-w-3xl px-4 text-gray-300">
                                {item.answer}
                            </p>
                        </div>

                        <hr className="my-8 border-gray-700" />
                    </div>
                ))}
            </div>
        </section>
    );
}
