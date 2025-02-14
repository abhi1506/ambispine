import React, { useState } from "react";

const FAQSection = ({faqData}) => {
  const [openIndex, setOpenIndex] = useState(null);

  // const faqData = [
  //   {
  //     question: "What is SEO and why is it important?",
  //     answer:
  //       "SEO (Search Engine Optimization) is the practice of optimizing your website to increase its visibility in search engine results. It's important because it helps drive organic traffic to your website, increases brand awareness, and can lead to better conversion rates.",
  //   },
  //   {
  //     question: "How long does it take to see results from SEO?",
  //     answer:
  //       "SEO is a long-term strategy that typically takes 4-6 months to start seeing significant results. However, this timeline can vary depending on factors like competition, content quality, and your starting point.",
  //   },
  //   {
  //     question: "Do I need SEO if my website already gets traffic?",
  //     answer:
  //       "Yes, SEO can still be beneficial even if your website already receives traffic. It helps ensure sustainable growth, diversifies your traffic sources, and keeps you competitive in your market.",
  //   },
  // ];

  const styles = {
    container: {
      maxWidth: "100%",
      margin: "0 auto",
      padding: "40px 20px",
      backgroundColor: "#060606",
      color: "#fff",
      fontFamily: "'Inter', sans-serif",
    },
    header: {
      textAlign: "center",
      marginBottom: "40px",
    },
    title: {
      fontSize: "2.5rem",
      marginBottom: "16px",
      fontWeight: "700",
    },
    subtitle: {
      fontSize: "1.1rem",
      color: "#888",
      marginBottom: "40px",
    },
    faqItem: {
      marginBottom: "16px",
      borderBottom: "1px solid #333",
    },
    question: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 0",
      fontSize: "1.1rem",
      cursor: "pointer",
      transition: "all 0.3s ease",
      userSelect: "none",
    },
    answer: {
      maxHeight: "0",
      overflow: "hidden",
      transition: "all 0.3s ease",
      padding: "0 20px",
      color: "#888",
    },
    answerOpen: {
      maxHeight: "200px",
      paddingBottom: "20px",
    },
    plusIcon: {
      fontSize: "24px",
      transition: "transform 0.3s ease",
    },
    plusIconOpen: {
      transform: "rotate(45deg)",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Frequently Asked Questions</h1>
        <p style={styles.subtitle}>
          Here Are Some Common Questions About This Service
        </p>
      </div>

      {faqData.map((faq, index) => (
        <div key={index} style={styles.faqItem}>
          <div
            style={styles.question}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {faq.question}
            <span
              style={{
                ...styles.plusIcon,
                ...(openIndex === index ? styles.plusIconOpen : {}),
              }}
            >
              +
            </span>
          </div>
          <div
            style={{
              ...styles.answer,
              ...(openIndex === index ? styles.answerOpen : {}),
            }}
          >
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
