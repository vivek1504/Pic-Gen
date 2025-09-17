import { ChevronDown } from "lucide-react";
import { useState } from "react";


const faqs = [
    {
        question: "1. What is text-to-image AI?",
        answer:
            "Text-to-image AI is one kind of technology that turns written descriptions into stunning pictures. Once you give the text-to-image generator a textural description, it will analyze them and turn the words into needed visual elements in the image.",
    },
    {
        question: "2. What can I do with Pic-Gen's free text-to-image AI generator?",
        answer: "You can create AI-generated artworks, illustrations, designs, and more with just a text prompt.",
    },
    {
        question: "3. How does AI generate images from text?",
        answer: "AI uses trained neural networks to convert words into shapes, textures, and colors to form a complete image.",
    },
    {
        question: "4. Can I use the AI images for commercial purposes guidelines?",
        answer: "Yes, depending on the platform’s usage rights. Please review the terms before commercial use.",
    },
    {
        question: "5. Is PicGen's text to image AI free to use?",
        answer: "Yes, it’s free to use with some limitations depending on the plan.",
    },
    {
        question: "6. Is PicGen's text-to-image generator easy for beginners?",
        answer: "Absolutely, it’s designed to be beginner-friendly while offering flexibility for advanced users.",
    },
];

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(-1); // first item open by default

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className=" py-16 text-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`rounded-lg transition-all duration-300 border-b ${openIndex === index
                                ? "bg-white/10 backdrop-blur-md border border-white/20 shadow-lg border-"
                                : ""
                                }`}
                        >
                            <button
                                className="flex items-center justify-between w-full text-left font-medium text-lg px-4 py-2 hover:text-purple-400 transition"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span>{faq.question}</span>
                                <ChevronDown
                                    className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out px-4 pb-4 ${openIndex === index
                                    ? "max-h-40 opacity-100"
                                    : "max-h-0 opacity-0"
                                    }`}
                            >
                                <p className="text-gray-200 text-sm md:text-base">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
