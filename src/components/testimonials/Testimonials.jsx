import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar5.jpg';
import AVTR2 from '../../assets/avatar6.jpg';
import AVTR3 from '../../assets/avatar7.jpg';
import AVTR4 from '../../assets/avatar8.jpg';

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: AVTR1,
        name: 'Godfrey Samuel',
        review: 'A consistent professional, he delivered on the product with great attention to detail and a high level of work. I would recommend him to anyone looking for a web developer.'
    },
    {
        avatar: AVTR2,
        name: 'Chukwuebuka Eze',
        review: 'David was friendly, fast, efficient and within budget. From advice on what work best for me was smart and insightful. I would recommend his work to anyone wanting a professional presence on the web.'
    },
    {
        avatar: AVTR3,
        name: 'Emmanuel Uzuakpundu',
        review: 'David completely re built my website for me during the covid-19 lockdown. He took my brief and injected his own creative ideas and showed an excellent understanding of the style I was trying to create. He worked quickly and was there when needed. Excellent!'
    },
    {
        avatar: AVTR4,
        name: 'Loveth Olanma',
        review: 'Extremely helpful, user-friendly, innovative and reliable. Very satisfactory outcome, knowing that I can go back to him at any time for further help'
    }
]

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <Swiper className="container testimonials__container"
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            
            pagination={{ clickable: true }}
            >
                {
                    data.map(({avatar, name, review}, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} alt={name} />
                        
                                 </div>
                                <h5 className="client__name">{name}</h5>
                                <small className="client__review">
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }
                
            </Swiper>
        </section>
    );
};
export default Testimonials;