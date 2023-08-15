import React from 'react';

const FAQSection = () => {
  const faqData = [
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept major credit cards (Visa, Mastercard, American Express) and PayPal.',
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order is shipped, you will receive a tracking number via email. You can use this number to track your package on our website.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept major credit cards (Visa, Mastercard, American Express) and PayPal.',
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order is shipped, you will receive a tracking number via email. You can use this number to track your package on our website.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept major credit cards (Visa, Mastercard, American Express) and PayPal.',
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order is shipped, you will receive a tracking number via email. You can use this number to track your package on our website.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept major credit cards (Visa, Mastercard, American Express) and PayPal.',
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order is shipped, you will receive a tracking number via email. You can use this number to track your package on our website.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept major credit cards (Visa, Mastercard, American Express) and PayPal.',
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order is shipped, you will receive a tracking number via email. You can use this number to track your package on our website.',
    },
  ];

  return (
    <div className="p-8 panel h-full">
      <h2 className="text-5xl font-semibold font-odesans-semibold text-white mb-10">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white/10 border-2 border-white/10 p-4 shadow-md rounded-md">
            <details className='transition duration-500'>
              <summary className="cursor-pointer transition duration-300 text-white font-space-grostek">{faq.question}</summary>
              <div className="mt-3 text-white/70 font-space-grostek">{faq.answer}</div>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
