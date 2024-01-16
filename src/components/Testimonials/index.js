import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faTools, faLaptopCode, faNetworkWired, faMagic } from '@fortawesome/free-solid-svg-icons';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Steve",
            role: "Senior Developer",
            comment: "Dan is an extremely smart and adaptable person, can turn his hand to anything and is a fountain of knowledge. It's always good to have someone like Dan in every company: the eternal Mr Fix-it and very easy to get along with.",
            icon: faTools // Represents adaptability and problem-solving
        },
        {
            name: "Michael",
            role: "Technical Consultant",
            comment: "Dan is a brilliant engineer who is extremely committed and adept in all the important things you want in IT - evaluation, analysis, execution, follow-up and service. Perhaps most of all, he cares that the solution works and meets the objective, and is frank and honest in all these undertakings including pointing out limitations, if any. Dan was generous with his time to explain concepts, which was very appreciated. I learned a lot from Dan. Without a doubt, Dan is one of the hardest working guys I know.",
            icon: faBrain // Represents intelligence and analysis
        },
        {
            name: "Kim",
            role: "Senior Developer",
            comment: "I found Dan to be extremely focused and willing to learn anything required to get the job done. He would not rest if a client had an issue to be resolved, even if this meant working through the night. At all times he added tremendous value to the business, providing many options beyond that of the requirement. He clearly loves what he does and has a keen interest in all IT matters. I enjoyed working with him and would not hesitate to do so again.",
            icon: faLaptopCode // Represents coding and focus
        },
        {
            name: "Ian",
            role: "Senior Network Engineer",
            comment: "Daniel is a brilliant technologist! He enjoys working with and learning the latest technology and applying that learning to his work. Daniel is an excellent trouble shooter and is able to consistently deliver results with little supervision.",
            icon: faNetworkWired // Represents network engineering
        },
        {
            name: "Fredrik",
            role: "Senior Software Developer Engineer",
            comment: "Dan is a tech wizard, a natural at setting up, coding and running applications with tens of millions of users. It's rare to work with someone so highly competent in the whole software life cycle, the whole stack and the whole infrastructure.",
            icon: faMagic // Represents exceptional technical skills
        }
    ];
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear"
    };
    
    return (
        <section className="bg-blue-100">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 lg:py-14">
                <h2 className="text-center text-4xl py-12 font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Reviews from other industry professionals
                </h2>

                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="mb-8 sm:break-inside-avoid">
                            <blockquote className="rounded-lg bg-white p-6 shadow-sm sm:p-8">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-500 text-white">
                                        <FontAwesomeIcon icon={testimonial.icon} size="2x" />
                                    </div>

                                    <div>
                                        <p className="mt-0.5 text-lg font-medium text-gray-900">{testimonial.name}</p>
                                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                                    </div>
                                </div>

                                <p className="mt-4 text-gray-800">
                                    "{testimonial.comment}"
                                </p>
                            </blockquote>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Testimonials;
