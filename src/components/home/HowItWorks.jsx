import React, { useEffect, useState } from "react";
import "./HowItWorks.css";
import { FaBook, FaHandsHelping, FaBookOpen, FaChartBar } from "react-icons/fa";

export default function HowItWorks() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById("how-it-works");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) setShow(true);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const cards = [
    {
      icon: <FaBook />,
      title: "Systematic Phonics",
      desc:
        "Structured progression through phonetic patterns, building strong foundational reading skills step by step with our carefully designed curriculum.",
      color: "purple",
    },
    {
      icon: <FaHandsHelping />,
      title: "Kinesthetic Activities",
      desc:
        "Hands-on learning with letter tiles, movement games, and tactile experiences that make reading engaging and memorable for young learners.",
      color: "pink",
    },
    {
      icon: <FaBookOpen />,
      title: "Decodable Readers",
      desc:
        "Carefully crafted stories that match your child's phonetic knowledge, building confidence and fluency with every page they read.",
      color: "blue",
    },
    {
      icon: <FaChartBar />,
      title: "Reading Diagnostic",
      desc:
        "Precise assessment tools that identify reading levels and guide personalized learning paths for optimal progress.",
      color: "orange",
    },
  ];

  return (
    <section id="how-it-works" className="how">
      <div className="how-container">

        {/* HEADER */}
        <div className={`how-header ${show ? "show" : ""}`}>
          <h2>HOW LET'S READ INDIA WORKS</h2>

          <div className="how-underline"></div>

          <div className="how-dots">
            <span className="dot purple"></span>
            <span className="dot pink"></span>
            <span className="dot yellow"></span>
          </div>

          <p>
            Our comprehensive approach combines proven methodologies with
            innovative tools to create an effective and joyful reading learning
            experience for children of all ages.
          </p>
        </div>

        {/* CARDS */}
        <div className="how-grid">
          {cards.map((c, i) => (
            <div key={i} className={`how-card ${show ? "show" : ""}`}>
              <div className={`icon-box ${c.color}`}>
                {c.icon}
              </div>

              <h3>{c.title}</h3>

              <p>{c.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}