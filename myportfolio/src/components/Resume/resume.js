import React from "react";
import "./resume.css";

const Resume = () => (
  <div className="animation resumestyle">
    <h1 className="main">RESUME</h1>
    <div>
        <button type="button" className="resumeBtn"><a href="https://drive.google.com/file/d/1JaQ3f-snG1j88x2vvrg1PXjRX4kywdKX/view?usp=drive_link">Download CV</a></button>
    </div>
    <div className="education-container">
      <h2>Education</h2>
      <div className="education-list">
        <div className="one">
          <p className="session">2022-23</p>
          <h3>Master's Of Computer Application</h3>
          <p className="college">Raja Balwant Singh Management Technical Campus, Agra</p>
          <p className="college">CGPA: 8.7</p>
        </div>
        <div className="two">
          <p className="session">2019-22</p>
          <h3>Bachelor's Of Computer Application</h3>
          <p className="college">Dr. MPS Group Of Institution College Of Business Studies, Agra</p>
          <p className="college">Percentage: 81%</p>
        </div>

      </div>

      <div className="skills-container">
        <h2>Skills</h2>
        <div className="list-container">
          <ul className="list">
            <li>C/C++ Programming language</li>
            <li>HTML/CSS</li>
            <li>Javascript</li>
            <li>Node JS</li>
            <li>MONGO DB</li>
            <li>React</li>
          </ul>
        </div>
      </div>

      <div className="certifications-container">
        <h2>Certifications</h2>
        <div className="certificates">
          <ul className="clist">
            <li>
              <a href="https://drive.google.com/file/d/1BxoUVqYGBS8-xwiGvZPfmRhq4USL6DHx/view">
                Udemy Web Development Bootcamp Course Certificate
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1xMC14u62V3a13GZFxHS5VWcoHVPx339R/view">
                Python Basic Certificate From Hackerrank
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1R7PJY_3tPAHzaIawrjxZZvtD3Yrl8vX7/view">
                Problem Solving Certificate From Hackerrank
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Resume;
