import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Is WordPress a good solution for my business?",
    answer:
      "That depends on your goals and the kind of functionality you need. But we're here to help you think through your options. Many businesses choose WordPress because it's easy to manage, SEO friendly, and the ongoing costs are fairly low. If built correctly, WordPress sites can last 10 years or more.",
  },
  {
    question: "How long will it take?",
    answer:
      "It varies based on the project's size, scope, and complexity. The fastest we've launched a site was four weeks, but generally, a new build takes 8-12 weeks. A lot depends on how quickly we get information and feedback from your team.",
  },
  {
    question: "Can you customize my existing site?",
    answer:
      "Yes, we can! Whether you need minor changes or a full revamp, our team can tailor your website to your needs.",
  },
  {
    question: "What is the cost of a new website?",
    answer:
      "The cost depends on various factors such as features, design, and complexity. We provide custom quotes based on your specific needs.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-center text-xl font-semibold text-pink-500 uppercase">EMNDEX FAQs</h2>
      
      <hr className="neon-gradient-line mx-auto sm:w-1/8" />
      <h3 className="text-center text-3xl font-bold text-white mt-2">
        You've got here? greate, we've got all your answers  <br />— having questions in your mind?
      </h3>

      {/* ✅ Grid for 2-column layout (md & lg screens) */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          // ✅ Wrap each FAQ in a `flex flex-col` container to ensure independent expansion
          <div key={index} className="flex flex-col rounded-lg">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center py-2 text-left text-lg text-white font-medium"
            >
              {faq.question}
              {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>

            {/* ✅ Each FAQ expands independently */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={openIndex === index ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
              className="text-gray-300 pt-2 overflow-hidden"
            >
              {faq.answer}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
