import React, { useState } from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa6";


const Footer = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqData = [
        {
            question: "What are your core services as a UX design and branding firm?",
            answer: [
                "At Clay, user experience is not just a capability but the cornerstone of our approach. We first began as a UX design agency in San Francisco, focusing on mobile apps and enterprise/SaaS software.",
                "However, our passion for branding and the demand from our clients led us to expand our offering to provide full-service brand design practice and web design and development of marketing websites.",
                "Today, our projects encompass a wide range, from building new products and defining brands to revitalizing existing mobile apps, websites, and enterprise software. We specialize in crafting digital products that wholeheartedly embody the brand's personality and deliver delightful experiences to your customers.",
                "Our team handles every aspect required to bring a digital product to life. This includes user research, product strategy, branding, user interface and experience design, usability testing, prototyping, web design, and development.",
                "Furthermore, we boast an in-house content production studio that provides creative direction, 2D/3D design, illustration and iconography, motion design, animation, sound design, photo/video, and copywriting services.",
            ]

        },
        {
            question: "What separates Clay from other branding and web design agencies?",
            answer: [
                "In a saturated market of excellent UX design and branding agencies, it's challenging to stand out. At Clay, we believe our client's success is intertwined with our own. We forge enduring partnerships based on trust and mutual growth, going beyond world-class services.",
                "When you choose us, you collaborate directly with our dedicated team, who genuinely care about your success. Our cofounders oversee every project, while a design director leads the way, ensuring thorough design reviews and involvement in project details.",
                "Communication and transparency drive all our interactions, guaranteeing a premium client experience from start to finish. Our agility stems from working with startups, and our refined project management approach comes from enterprise experience.",
                "Unlike traditional design firms, we integrate branding and product expertise in one place, boasting cross-disciplinary teams for each project. This ensures your app or website represents your brand effectively while delivering an unforgettable user experience.",
                "Lastly, we specialize in creating scalable designs that support your long-term business goals. Our portfolio showcases websites and products untouched for over five years, proving our future-proof capabilities.",
            ]

        },
        {
            question: "What are your core services as a UX design and branding firm?",
            answer: [
                "At Clay, user experience is not just a capability but the cornerstone of our approach. We first began as a UX design agency in San Francisco, focusing on mobile apps and enterprise/SaaS software.",
                "However, our passion for branding and the demand from our clients led us to expand our offering to provide full-service brand design practice and web design and development of marketing websites.",
                "Today, our projects encompass a wide range, from building new products and defining brands to revitalizing existing mobile apps, websites, and enterprise software. We specialize in crafting digital products that wholeheartedly embody the brand's personality and deliver delightful experiences to your customers.",
                "Our team handles every aspect required to bring a digital product to life. This includes user research, product strategy, branding, user interface and experience design, usability testing, prototyping, web design, and development.",
                "Furthermore, we boast an in-house content production studio that provides creative direction, 2D/3D design, illustration and iconography, motion design, animation, sound design, photo/video, and copywriting services.",
            ]

        },
        {
            question: "What separates Clay from other branding and web design agencies?",
            answer: [
                "In a saturated market of excellent UX design and branding agencies, it's challenging to stand out. At Clay, we believe our client's success is intertwined with our own. We forge enduring partnerships based on trust and mutual growth, going beyond world-class services.",
                "When you choose us, you collaborate directly with our dedicated team, who genuinely care about your success. Our cofounders oversee every project, while a design director leads the way, ensuring thorough design reviews and involvement in project details.",
                "Communication and transparency drive all our interactions, guaranteeing a premium client experience from start to finish. Our agility stems from working with startups, and our refined project management approach comes from enterprise experience.",
                "Unlike traditional design firms, we integrate branding and product expertise in one place, boasting cross-disciplinary teams for each project. This ensures your app or website represents your brand effectively while delivering an unforgettable user experience.",
                "Lastly, we specialize in creating scalable designs that support your long-term business goals. Our portfolio showcases websites and products untouched for over five years, proving our future-proof capabilities.",
            ]

        },

    ]

    const toggleAction = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };
    return (
        <div className='p-7 bg-[#17191f]'>
            <div className='px-40 my-20'>
                <div>
                    <h1 className='font-bold text-[white] text-6xl'>FAQ</h1>
                </div>
                <div className="my-8">
                    {faqData.map((faq, index) => (
                        <div key={index} className="">
                            <div
                                className={`faq-question flex justify-between items-center ${activeIndex === index ? "active" : ""} text-[#eaecef] font-semibold text-2xl my-16`}
                                onClick={() => toggleAction(index)}
                            >
                                <span className="faq-question-text">{faq.question}</span>
                                <span
                                    className={`faq-toggle-arrow ${activeIndex === index ? "active" : ""}`}
                                    onClick={() => toggleAction(index)}
                                >
                                    {activeIndex === index ? "▲" : "▼"}
                                </span>
                            </div>

                            {activeIndex === index && (
                                <div className="text-[#858e97] font-bold text-lg my-4 pr-[50%]">
                                    {faq.answer.map((paragraph, pIndex) => (
                                        <p className='my-4' key={pIndex}>{paragraph}</p>
                                    ))}
                                </div>
                            )}
                            {index !== faqData.length - 1 && <hr className="" />}
                        </div>
                    ))}
                </div>

                <div className='grid grid-cols-2 mt-40'>
                    <div>
                        <h1 className='font-bold text-[white] text-6xl'>Let’s Talk</h1>
                        <h1 className=' text-[white] text-3xl mt-5'>hey@clay.global</h1>
                    </div>
                    <div className='px-40'>
                        <ul className=''>
                            <li className='mx-6 text-xl my-2 text-white font-normal'>Work</li>
                            <li className='mx-6 text-xl my-2 text-white font-normal'>Client</li>
                            <li className='mx-6 text-xl my-2 text-white font-normal'>Services</li>
                            <li className='mx-6 text-xl my-2 text-white font-normal'>About</li>
                            <li className='mx-6 text-xl my-2 text-white font-normal'>Contact</li>
                        </ul>
                    </div>
                </div>
                <div className='grid grid-cols-2 mt-40 items-center'>
                    <div>
                        <h1 className='font-bold text-[white] text-xl'>300 Broadway, San Francisco, CA 94133</h1>
                    </div>
                    <div className='px-40'>
                        <ul className='flex'>
                            <li className='mx-6 text-xl  text-white font-normal'><FaDribbble /></li>
                            <li className='mx-6 text-xl  text-white font-normal'><FaBehance /></li>
                            <li className='mx-6 text-xl  text-white font-normal'><FaInstagram /></li>
                            <li className='mx-6 text-xl  text-white font-normal'><FaLinkedinIn /></li>
                            <li className='mx-6 text-xl  text-white font-normal'><FaTwitter /></li>
                            <li className='mx-6 text-xl  text-white font-normal'><FaFacebookF /></li>
                        </ul>
                    </div>
                </div>
                <div className='grid grid-cols-2 mt-10 items-center'>
                    <div >
                        <ul className='flex'>
                            <li className='mx-6 text-xl  text-[#858e97] font-normal'>Privacy</li>
                            <li className='mx-6 text-xl  text-[#858e97] font-normal'>Terms</li>
                            <li className='mx-6 text-xl  text-[#858e97] font-normal'>Sitemap</li>
                        </ul>
                    </div>
                    <div className='pl-48'>
                        <h1 className='text-[#858e97] text-xl'>© 2016 – 2023 Clay Global, LLC</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer