import React from "react";
import "./portfolio.css";

import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG7 from "../../assets/portfolio6.jpg";

import IMG8 from "../../assets/save4.jpg";
import IMG9 from "../../assets/erp.jpg";
import IMG10 from "../../assets/st-travels.jpg";
import IMG11 from "../../assets/bfg.jpg";
import IMG12 from "../../assets/cyber-clinics.jpg";
import IMG13 from "../../assets/portfolio9.png";
import IMG14 from "../../assets/portfolio10.png";
import IMG15 from "../../assets/portfolio11.png";

  

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
    demo: "https://www.alanturingcodes.com",
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
    demo: "https://www.emosbestgroup.com/",
    disabled: false,
  },
 {
    id: 8,
    image: IMG10,
    title: "Travel Agency Web Application (NextJS, Bootstrap, Redux)",
    github: "",
    demo: "https://www.sttravelsconsulting.com",
    disabled: false,
  },
{
    id: 9,
    image: IMG11,
    title: "Business Consulting Agency Website (NextJS, Tailwind, Redux)",
    github: "",
    demo: "https://www.bfgconsults.com/",
    disabled: false,
  },
{
    id: 10,
    image: IMG12,
    title: "Telemedical Mobile App (Bubble.io, React Native, Firebase)",
    github: "",
    demo: "https://play.google.com/store/apps/details?id=com.ffpvhuMeFsAT.natively",
    disabled: false,
  },
  {
    id: 11,
    image: IMG13,
    title: "Real Estate and Property Management Application( NextJS, PayloadCMS)",
    github: "",
    demo: "https://www.pagemansions.com",
    disabled: false,
  },
   {
    id: 12,
    image: IMG14,
    title: "FMCG E-Commerce Platform (NexJS, PayloadCMS)",
    github: "",
    demo: "https://www.chikblessing.com",
    disabled: false,
  },
   {
    id: 13,
    image: IMG15,
    title: "Agro E-Commerce Platform (NexJS, PayloadCMS)",
    github: "",
    demo: "https://www.kobamsagrosolutions.com",
    disabled: false,
  },
  
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

     <div className="container portfolio__container">
  {data
    .slice() 
    .reverse() 
    .map(({ id, image, title, github, demo, disabled }) => {
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
