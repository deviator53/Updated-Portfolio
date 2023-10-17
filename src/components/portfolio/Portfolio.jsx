import React from "react";
import "./portfolio.css";

import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG7 from "../../assets/portfolio6.jpg";
import IMG8 from "../../assets/save4.jpg";
import IMG9 from "../../assets/erp.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "E-Commerce Website (HTML, CSS, JS)",
    github: "https://github.com/deviator53/E-Commerce-JS",
    demo: "https://deviator53.github.io/E-Commerce-JS/",
    disabled: false,
  },
  {
    id: 2,
    image: IMG2,
    title: "Allan Turing Codes Website (ReactJS)",
    github: "https://github.com/GodfreySam/alt-website",
    demo: "https://alanturingcodes.com",
    disabled: false,
  },
  {
    id: 3,
    image: IMG3,
    title: "UBEC Work Management System (ReactJS, MaterialUI, NodeJS)",
    github: "https://github.com/GodfreySam/ubec",
    demo: "https://uwd.vercel.app",
    disabled: false,
  },
  {
    id: 4,
    image: IMG4,
    title: "Food Website (HTML, CSS)",
    github: "https://github.com/deviator53/FoodWebsite",
    demo: "https://deviator53.github.io/FoodWebsite/",
    disabled: false,
  },
  {
    id: 5,
    image: IMG7,
    title: "Whack a Mole Game (HTML, CSS, JS)",
    github: "https://github.com/deviator53/FoodWebsite",
    demo: "https://whack1--mole.surge.sh",
    disabled: false,
  },
  {
    id: 6,
    image: IMG8,
    title: "Save 4 Fintech Mobile App (React Native)",
    github: "",
    demo: "https://play.google.com/store/apps/details?id=com.Save4",
    disabled: false,
  },
  {
    id: 7,
    image: IMG9,
    title: "ERP Software (ReactJS, MUI, Tailwind, Redux)",
    github: "",
    demo: "",
    disabled: true,
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, disabled }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className={`btn  ${disabled ? "disabled" : ""}`}
                  onClick={(e) => disabled && e.preventDefault()}
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className={`btn btn-primary ${disabled ? "disabled" : ""}`}
                  onClick={(e) => disabled && e.preventDefault()}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Portfolio;
