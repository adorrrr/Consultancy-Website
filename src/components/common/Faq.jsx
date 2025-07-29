import React, { useState } from 'react';

const faData = [
  {
    question: 'What kind of businesses do you work with?',
    answer: 'Neonverse is a digital ecosystem built to empower users through web3 innovations.'
  },
  {
    question: 'Can you work with our existing tech stack?',
    answer: 'Neonverse includes various platforms focusing on entertainment, finance, and decentralized solutions.'
  },
  {
    question: 'How long does it take to see results?',
    answer: 'To create a vibrant decentralized universe that enhances user autonomy and digital experience.'
  },
  {
    question: 'What makes WiseConsult different from other AI consultants?',
    answer: 'The native tokens include $NEO and $VRS, powering transactions and governance.'
  },
  {
    question: 'How do we get started?',
    answer: 'The native tokens include $NEO and $VRS, powering transactions and governance.'
  }
];


const Faq  = () => {
const [activeIndex, setActiveIndex] = useState(1); // Default open: second item

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
<section className='faq'>
    <div className="faq-container">
      {faData.map((item, index) => (
        <div className="faq-item" key={index}>
          <button
            className="faq-question"
            onClick={() => toggleIndex(index)}
          >
            {item.question}
          </button>
          <div className={`faq-answer ${activeIndex === index ? 'open' : ''}`}>
            {item.answer}
          </div>
        </div>
      ))}

    </div>
</section>

  );
};

export default Faq 