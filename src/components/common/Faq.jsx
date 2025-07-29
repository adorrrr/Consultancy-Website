import React, { useState } from 'react';

const faData = [
  {
    question: 'What is Neonverse?',
    answer: 'Neonverse is a digital ecosystem built to empower users through web3 innovations.'
  },
  {
    question: 'What platforms are included in Neonverse?',
    answer: 'Neonverse includes various platforms focusing on entertainment, finance, and decentralized solutions.'
  },
  {
    question: 'What is the vision of Neonverse?',
    answer: 'To create a vibrant decentralized universe that enhances user autonomy and digital experience.'
  },
  {
    question: 'What are the native tokens of Neonverse?',
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