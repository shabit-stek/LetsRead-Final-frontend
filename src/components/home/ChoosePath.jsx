import React, { useEffect, useState } from "react";
import "./ChoosePath.css";
import { FaHome, FaSchool } from "react-icons/fa";

export default function ChoosePath() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById("choose-path");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) setAnimate(true);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="choose-path" className="choose-path">
      <div className="container">

        {/* HEADER */}
        <div className={`header ${animate ? "show" : ""}`}>
          <h2>CHOOSE YOUR PATH TO READING SUCCESS</h2>

          <div className="underline"></div>

          <div className="dots">
            <span className="dot purple"></span>
            <span className="dot pink"></span>
            <span className="dot yellow"></span>
          </div>

          <p>
            Whether you're a parent looking to support your child at home or an
            educator seeking to enhance your classroom, we have the perfect
            solution for you.
          </p>
        </div>

        {/* CARDS */}
        <div className="cards">

          {/* Parents Card */}
          <div className={`card ${animate ? "show" : ""}`}>
            {/* <div className="floating pink-circle"></div> */}

            <div className="card-header">
              <div className="icon purple-bg"><FaHome /></div>
              <div>
                <h3>For Parents</h3>
                <span>Home Learning Kits</span>
              </div>
            </div>

            <p className="desc">
              Give your child the gift of confident reading with our structured,
              fun-filled home learning kits. Perfect for ages 3–10 and designed
              for busy parents.
            </p>

            <ul className="features">
              <li><span className="bullet purple"></span>Age-appropriate levels</li>
              <li><span className="bullet pink"></span>Parent-friendly guides</li>
              <li><span className="bullet yellow"></span>Progress tracking</li>
              <li><span className="bullet purple"></span>15–20 mins daily routines</li>
            </ul>

            <a href="/parents" className="btn purple-btn">
              Explore Home Kits →
            </a>
          </div>

          {/* Schools Card */}
          <div className={`card ${animate ? "show" : ""}`}>
            {/* <div className="floating purple-circle"></div> */}

            <div className="card-header">
              <div className="icon pink-bg"><FaSchool /></div>
              <div>
                <h3>For Schools</h3>
                <span>Classroom Programs</span>
              </div>
            </div>

            <p className="desc">
              Transform your school's reading program with our evidence-based
              curriculum and teacher training. Aligned with educational
              standards and proven to boost literacy rates.
            </p>

            <ul className="features">
              <li><span className="bullet pink"></span>Teacher training</li>
              <li><span className="bullet purple"></span>Classroom resources</li>
              <li><span className="bullet yellow"></span>Assessment tools</li>
              <li><span className="bullet pink"></span>Ongoing support</li>
            </ul>

            <a href="/schools" className="btn pink-btn">
              See School Program →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}