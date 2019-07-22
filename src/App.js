import React from "react";
import { ReactComponent as User } from "./user.svg";
import { ReactComponent as BriefCase } from "./briefcase.svg";
import { ReactComponent as Medal } from "./medal.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="name">
          <h1>MICHAEL GICHIA</h1>
        </div>
        <div className="sub-name">
          <p>
            Software Engineer &nbsp; | &nbsp; Nairobi, Kenya &nbsp; | &nbsp;
            +254710853398
          </p>
        </div>
      </header>
      <main className="main">
        <aside className="aside">
          <div>Hello world</div>
        </aside>
        <section className="resume-body">
          <div className="resume-section">
            <div className="resume-item-title">
              <User height="14px" width="14px" />
              <h3>PROFILE</h3>
            </div>
            <div className="resume-item-description">
              <p>
                Passionate, responsible and committed frontend so ware engineer,
                with a get - it - done, on - time spirit, and more than three
                years of experience designing, implementing and adapting
                technically modern online web applications using JavaScript,
                React, Nodejs, CSS, modular architecture and more. Proficient in
                front-end technologies, language standards and application
                life-cycle management.
              </p>
            </div>
          </div>
          <div className="resume-section">
            <div className="resume-item-title">
              <BriefCase height="14px" width="14px" />
              <h3>EMPLOYMENT HISTORY</h3>
            </div>
            <div className="resume-item-sub-title">
              <h4>Frontend Engineer Lead at Mookh Africa, Nairobi, Kenya</h4>
              <h4>March 2018 – Present</h4>
            </div>
            <div className="resume-item-description">
              <p className="resume-brief">
                Promoted to lead system development such as sellers and buyers
                platform, other front-end applications and launched Mookh Africa
                version 2.0. Ensured accurate releases, testing for all new
                applications, providing final approval for bug-free and fully
                functional solutions. Created development plans, project
                timelines, and test cases.
              </p>
              <h5>Key Achievements:</h5>
              <ul className="resume-item-actionable">
                <li>
                  <p>
                    Authored numerous re-usable components in support of the
                    development process of several projects saving a
                    considerable amount of time for our engineering team.
                  </p>
                </li>
                <li>
                  <p>
                    Streamlined mobile payments solutions and MasterCard payment
                    gateway for the Mookh Africa customers website and cut down
                    customers purchasing time from over 10 minutes to less than
                    2 minutes.
                  </p>
                </li>
                <li>
                  <p>
                    Worked closely with user experience (UX) designers including
                    scaﬀolding prototypes, envision the way users are likely to
                    consume a product and validated assumptions with regard to
                    the user behaviour.
                  </p>
                </li>
                <li>
                  <p>
                    Implemented user-centred designs, created mobile-first
                    applications and achieved the company objective to support
                    over 70% customer base on the mobile phones.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="resume-section">
            <div className="resume-item-sub-title">
              <h4>Frontend Engineer at Mookh Africa, Nairobi, Kenya</h4>
              <h4>September 2017 – February 2018</h4>
            </div>
            <div className="resume-item-description">
              <p className="resume-brief">
                Promoted to lead system development such as sellers and buyers
                platform, other front-end applications and launched Mookh Africa
                version 2.0. Ensured accurate releases, testing for all new
                applications, providing final approval for bug-free and fully
                functional solutions. Created development plans, project
                timelines, and test cases.
              </p>
              <h5>Key Achievements:</h5>
              <ul className="resume-item-actionable">
                <li>
                  <p>
                    Improved loading performance on several pages by decoupling
                    concerns, lazy-load components, re-used code and remoulded a
                    scalable architecture.
                  </p>
                </li>
                <li>
                  <p>
                    Facilitated technical design reviews with the team and
                    ensured requirements are achieved to style guide
                    specifications and expectations.
                  </p>
                </li>
                <li>
                  <p>
                    Performed maintenance and code refactoring to improve the
                    quality of the codebase.
                  </p>
                </li>
                <li>
                  <p>
                    Consumed API and built rich interactive user-interface to
                    enable a great user experience.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="resume-section">
            <div className="resume-item-sub-title">
              <h4>Frontend developer at Crowdbotics, California (remote)</h4>
              <h4>September 2018 – September 2018</h4>
            </div>
            <div className="resume-item-description">
              <p className="resume-brief">
                Market Games is a gamified digital tool for professors and
                students in reinforcing learning objectives, reduce
                administrative hassle, increase enrollment and retention and
                help to monitor performance and focus on what matters the most.
                I attained 5 out the 5-star rating on this projects.
              </p>
              <h5>Key Achievements:</h5>
              <ul className="resume-item-actionable">
                <li>
                  <p>
                    Design and created user interfaces with the goal of
                    improving the user experience and usability. As a team, we
                    revamped a data-driven admin system that automated
                    professors and students workload.
                  </p>
                </li>
                <li>
                  <p>
                    Participated in agile ceremonies with our virtual team.
                    Worked closely with the scrum master to estimate the eﬀort
                    of new features.
                  </p>
                </li>
                <li>
                  <p>
                    Accomplished other projects that I was assigned and other
                    time cohesively with other talented developers in a
                    positive, team environment.
                  </p>
                </li>
                <li>
                  <p>
                    Technologies: JavaScript, React, Redux, D3js, HTML, Saas.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="resume-section">
            <div className="resume-item-sub-title">
              <h4>Software developer at Deals Expert, Germany (remote)</h4>
              <h4>April 2017 – June 2017</h4>
            </div>
            <div className="resume-item-description">
              <p className="resume-brief">
                Deals expert is an aﬀiliate marketing website for advertising
                latest and trending products, services across the globe.
              </p>
              <h5>Key Achievements:</h5>
              <ul className="resume-item-actionable">
                <li>
                  <p>
                    Spearheaded this project from conceptualization, assessed
                    project requirements, design and created a customer-facing
                    and admin platform. Architecture RESTful.
                  </p>
                </li>
                <li>
                  <p>APIs with Nodejs and Express.js.</p>
                </li>
                <li>
                  <p>
                    Used various JavaScript technologies and framework such as
                    React, Redux, Material-ui, Algolia to build and launch a
                    modern e-commerce platform.
                  </p>
                </li>
                <li>
                  <p>
                    Technologies: Nodejs, MongoDB, JavaScript, Expressjs, React,
                    Redux, HTML, CSS.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="resume-section">
            <div className="resume-item-sub-title">
              <h4>Software developer at Deals Expert, Germany (remote)</h4>
              <h4>April 2017 – June 2017</h4>
            </div>
            <div className="resume-item-description">
              <p className="resume-brief">
                Deals expert is an aﬀiliate marketing website for advertising
                latest and trending products, services across the globe.
              </p>
              <h5>Key Achievements:</h5>
              <ul className="resume-item-actionable">
                <li>
                  <p>
                    Spearheaded this project from conceptualization, assessed
                    project requirements, design and created a customer-facing
                    and admin platform. Architecture RESTful.
                  </p>
                </li>
                <li>
                  <p>APIs with Nodejs and Express.js.</p>
                </li>
                <li>
                  <p>
                    Used various JavaScript technologies and framework such as
                    React, Redux, Material-ui, Algolia to build and launch a
                    modern e-commerce platform.
                  </p>
                </li>
                <li>
                  <p>
                    Technologies: Nodejs, MongoDB, JavaScript, Expressjs, React,
                    Redux, HTML, CSS.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="resume-section">
            <div className="resume-item-sub-title">
              <h4>
                Soware developer ( Internship ) at StrongDev, Nairobi, Kenya
              </h4>
              <h4>September 2016 – February 2017</h4>
            </div>
            <div className="resume-item-description">
              <p className="resume-brief">
                Mental-Calculation Game is a mathematics game that tracks how
                many correct answers you can score per time. I was the
                front-end, basically building the game logic in JavaScript,
                building UIs and consuming data from APIs for users statistics.
              </p>
              <h5>Key Achievements:</h5>
              <ul className="resume-item-actionable">
                <li>
                  <p>
                    Technologies: JavaScript: React, Redux, Redux-thunk,
                    Ant-Design - Html, CSS, Python, mongoAlchemy.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="resume-section">
            <div className="resume-item-title">
              <Medal height="14px" width="14px" />
              <h3>EDUCATION</h3>
            </div>
            <div className="resume-item-sub-title">
              <h4>The Nairobi Dev School, Nairobi, Kenya</h4>
              <h4>2015 (3 months)</h4>
            </div>
            <div className="resume-item-description">
              <p className="resume-brief">
                A Twelve weeks boot camp as we trained as web developers and
                covered the fundamentals of computer science.
              </p>
              <h5>Certification: Soware Development:</h5>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
