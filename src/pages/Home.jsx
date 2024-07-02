import { Link } from "react-router-dom";
import videoBg from '../assets/hero-video.mp4';
import servicesImg1 from '../assets/services-img-1.jpg';
import servicesImg2 from '../assets/services-img-2.jpg';
import servicesImg3 from '../assets/services-img-3.jpg';
import ctaImage from '../assets/cta-section-image.jpg';
import { motion } from "framer-motion";

const heroTextVariants = {
    initial: {
        x: -50,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.3
        }
    }
}

const servicesVariants = {
    initial: {
        x: -100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.3
        }
    }
}

export default function Home() {

    const services = [
        {servicesName: 'Photo Shooting', servicesDescription: "Whether it's a family portrait, a corporate headshot, or a wedding ceremony, my photo shooting services are tailored to suit your needs. I understand the importance of capturing the perfect moment, and I excel in creating stunning images that reflect your unique personality and style.", servicesImage: servicesImg1, alt: 'Photo Shooting image'},
        {servicesName: 'Video Shooting', servicesDescription: "From cinematic wedding films to promotional videos, my video shooting services are designed to tell your story with elegance and precision. Using state-of-the-art equipment and techniques, I capture every detail and emotion, ensuring that your vision is brought to life on screen.", servicesImage: servicesImg2, alt: 'Video Shooting image'},
        {servicesName: 'Retouch', servicesDescription: "My retouching services add the finishing touch to your photographs, enhancing their beauty and clarity. Whether it's removing imperfections, adjusting colors, or adding creative effects, I ensure that every image is polished to perfection.", servicesImage: servicesImg3, alt: 'Photo Shooting image',}
    ];

    return (
        <main>
            <section id="hero-section" className="relative">
                <video autoPlay muted loop id="myVideo" className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover -z-[2]">
                    <source src={videoBg} type="video/mp4"/>
                </video>
                <div className="bg-black/50 absolute top-0 left-0 right-0 bottom-0 -z-[1]"></div>
                <div className="wrapper flex items-center justify-between min-h-screen lg:min-h-[800px] text-white">
                    <motion.div className="max-w-[550px] pt-[128px] pb-[64px]" variants={heroTextVariants} animate="animate" initial="initial">
                        <motion.h1 variants={heroTextVariants}>let's capture<br />your beautiful<br />moments</motion.h1>
                        <motion.p className="my-6" variants={heroTextVariants}>With unique approach to photography, I take ordinary moments and transform them into extraordinary memories that will last a lifetime.</motion.p>
                        <motion.div variants={heroTextVariants}>
                            <Link to='/portfolio' className="btn">View Portfolio</Link>
                        </motion.div>
                    </motion.div>   
                </div>
            </section>

            <section id="services-section">
                <div className="wrapper pt-[50px] md:pt-[100px] pb-[25px] md:pb-[100px]">
                {services.map((service, index) => (
                    <motion.div variants={servicesVariants} animate='animate' initial='initial' key={index} className="flex items-center relative justify-between flex-col-reverse gap-10 md:static md:flex-row-reverse text-right lg:gap-20 pb-[50px] md:pb-[100px] odd:text-left md:pt-[50px] md:odd:flex-row last-of-type:pb-[50px]">
                        <motion.div className={'bg-slate-100 h-[300px] md:h-[450px] absolute bottom-[25px] md:bottom-auto max-w-[90%] md:max-w-[40%] w-full -z-10 ' + (index % 2 === 0 ? '-left-4 md:-left-0' : '-right-4 md:-right-0')}></motion.div>
                        <motion.div className="w-full md:w-auto md:flex-1 relative h-[250px] md:h-[350px]">
                            <motion.img src={service.servicesImage} alt={service.alt}/>
                        </motion.div>
                        <motion.div className="flex-1">
                            <motion.h2 className="mb-4">{service.servicesName}</motion.h2>
                            <motion.p>{service.servicesDescription}</motion.p>
                        </motion.div>
                    </motion.div>
                ))}
                </div>
            </section>

            <section id="cta-section" className="relative">
                <div style={{ backgroundImage: `url(${ctaImage})` }} className="absolute top-0 left-0 bg-center bg-cover h-full w-full -z-[2]"></div>
                <div className="wrapper max-w-2xl text-center py-[50px] md:py-[100px] text-white z-[3]">
                    <h2>Capture Moments, Create timeless Memories</h2>
                    <p className="my-8">Don't miss out on the opportunity to turn your memories into timeless art. Let's work together to create stunning visuals that tell your unique story.</p>
                    <Link to='/contact' className="btn">Get Started</Link>
                </div>
                <div className="bg-black/50 absolute top-0 left-0 right-0 bottom-0 -z-[1]"></div>
            </section>
        </main>
    )
}