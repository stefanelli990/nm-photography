import { motion } from "framer-motion";
import servicesImg1 from '../assets/services-img-1.jpg';
import servicesImg2 from '../assets/services-img-2.jpg';
import servicesImg3 from '../assets/services-img-3.jpg';

export default function Services() {

  const services = [
    { servicesName: 'Photo Shooting', servicesDescription: "Whether it's a family portrait, a corporate headshot, or a wedding ceremony, my photo shooting services are tailored to suit your needs. I understand the importance of capturing the perfect moment, and I excel in creating stunning images that reflect your unique personality and style.", servicesImage: servicesImg1, alt: 'Photo Shooting image' },
    { servicesName: 'Video Shooting', servicesDescription: "From cinematic wedding films to promotional videos, my video shooting services are designed to tell your story with elegance and precision. Using state-of-the-art equipment and techniques, I capture every detail and emotion, ensuring that your vision is brought to life on screen.", servicesImage: servicesImg2, alt: 'Video Shooting image' },
    { servicesName: 'Retouch', servicesDescription: "My retouching services add the finishing touch to your photographs, enhancing their beauty and clarity. Whether it's removing imperfections, adjusting colors, or adding creative effects, I ensure that every image is polished to perfection.", servicesImage: servicesImg3, alt: 'Photo Shooting image' }
  ];

  return (
    <section id="services-section" className="overflow-x-hidden">
      <div className="wrapper pt-[50px] md:pt-[100px] pb-[25px] md:pb-[100px]">
        {services.map((service, index) => (
          <div key={index} className="flex items-center relative justify-between flex-col-reverse gap-10 md:static md:flex-row-reverse text-right lg:gap-20 pb-[50px] md:pb-[100px] odd:text-left md:pt-[50px]  last-of-type:pb-[50px]">
            
       
            <motion.div 
              initial={{ width: 30, opacity: 0 }}
              whileInView={{ width: "100%", opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.3 }} // trigger animation once and when 50% of the component is in view
              className={'bg-slate-100 h-[300px] md:h-[450px] absolute bottom-[25px] md:bottom-auto max-w-[90%] md:max-w-[40%] w-full -z-10 ' + (index % 2 === 0 ? '-left-4 md:-left-0' : '-right-4 md:-right-0')}
            ></motion.div>
            
            
            <motion.div 
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className={"flex items-center justify-between flex-col-reverse gap-10 lg:gap-20 " + (index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse')}>
                <div className="w-full md:w-auto md:flex-1 relative h-[250px] md:h-[350px]">
                <img src={service.servicesImage} alt={service.alt} />
                </div>
                <div className="flex-1 odd:text-right">
                <h2 className="mb-4">{service.servicesName}</h2>
                <p>{service.servicesDescription}</p>
                </div>
            </motion.div>

          </div>
        ))}
      </div>
    </section>
  )
}
