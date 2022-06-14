import React from 'react';
import './services.css';
import {BsCheck} from 'react-icons/bs';

const Services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>Content Creation</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Proficient in creating all types of online content</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>100% original and unique content</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Revisions on request</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Keyword-optimized content for SEO</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Quick turnaround</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Industry best pricing</p>
                        </li>
                       
                    </ul>
                </article>
                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Analytics Interpretation and Reporting</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Competition Monitoring</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>HTML E-mail Template Design</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Blog Customization/Management</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Pay-Per-Click Campaign Management</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Sales Presentation Development</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Usability Testing</p>
                        </li>
                    </ul>
                </article>
                <article className="service">
                    <div className="service__head">
                        <h3>Product Design</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>UX/UI audits</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Competition Monitoring</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Professional user interface structures
</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Brand iconography and illustrations</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Visual designs & animations</p>
                        </li>
                        <li>
                            <BsCheck className="service__list-icon"/>
                            <p>Layout prototypes</p>
                        </li>
                        
                    </ul>
                </article>
            </div>
        </section>
    );
};
export default Services;