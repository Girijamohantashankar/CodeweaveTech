"use client";
import React, { useState } from "react";
import "../../../style/FAQ.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Page() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index); 
  };

  return (
    <section className="faq_container">
      <h2 className="faq_heading">Frequently Asked Questions</h2>
      <div className="faq_list">
        {[ 
          {
            question: "What is included in the free maintenance?",
            answer: "Free maintenance includes fixing bugs, ensuring website uptime, and making minor content updates as per your request."
          },
          {
            question: "Are there any hidden charges?",
            answer: "No hidden charges. However, additional features or significant changes outside the agreed scope may incur minimal charges."
          },
          {
            question: "Can I upgrade my plan later?",
            answer: "Yes, you can upgrade your plan anytime. Simply contact our support team, and we'll assist you with the process."
          },
          {
            question: "What happens after the 2 years of free maintenance?",
            answer: "After the 2-year free maintenance period, you can choose to extend the maintenance service for an affordable fee."
          },
          {
            question: "How do I request changes to my website?",
            answer: "You can request changes via email or our support portal. For small updates, it’s completely free as per our policy."
          }
        ].map((faq, index) => (
          <div className="faq_item" key={index}>
            <h3 className="faq_question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className={`faq_icon ${openFAQ === index ? "open" : ""}`}>
                {openFAQ === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </h3>
            <p className={`faq_answer ${openFAQ === index ? "open" : ""}`}>
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Page;
