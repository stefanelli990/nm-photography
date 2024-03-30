import Link from "next/link";
import Image from "next/image";

import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import SectionTitle from "./components/sectionTitle";

import bgHeroImage from '../public/hero-img.jpg';
import galleryImg1 from '../public/gallery1.jpg';
import galleryImg2 from '../public/gallery2.jpg';
import galleryImg3 from '../public/gallery3.jpg';
import galleryImg4 from '../public/gallery4.jpg';
import galleryImg5 from '../public/gallery5.jpg';
import galleryImg6 from '../public/gallery6.jpg';
import servicesImg1 from '../public/services-img-1.jpg';
import servicesImg2 from '../public/services-img-2.jpg';
import servicesImg3 from '../public/services-img-3.jpg';

const services = [
  {servicesName: 'Photo Shooting', servicesDescription: 'Lorem ipsum dolor sit amet consectetur. Tortor lacus posuere magna arcu elit cras. Semper neque nisl ut consequat odio hendrerit mauris sem.', servicesImage: servicesImg1, alt: 'Photo Shooting image'},
  {servicesName: 'Video Shooting', servicesDescription: 'Lorem ipsum dolor sit amet consectetur. Tortor lacus posuere magna arcu elit cras. Semper neque nisl ut consequat odio hendrerit mauris sem.', servicesImage: servicesImg2, alt: 'Video Shooting image'},
  {servicesName: 'Retouch', servicesDescription: 'Lorem ipsum dolor sit amet consectetur. Tortor lacus posuere magna arcu elit cras. Semper neque nisl ut consequat odio hendrerit mauris sem.', servicesImage: servicesImg3, alt: 'Photo Shooting image'},
];

const galleryImages = [
  {imgName: galleryImg1, alt: 'Gallery Image 1'},
  {imgName: galleryImg2, alt: 'Gallery Image 2'},
  {imgName: galleryImg3, alt: 'Gallery Image 3'},
  {imgName: galleryImg4, alt: 'Gallery Image 4'},
  {imgName: galleryImg5, alt: 'Gallery Image 5'},
  {imgName: galleryImg6, alt: 'Gallery Image 6'}
];

export default function Home() {
  return (
   <main>
      <section id="hero-section" className="relative">
        <Image src={bgHeroImage} fill priority alt="Hero image" className="object-cover z-[-2]"/>
        <div className="section-container flex flex-col items-center justify-center text-center min-h-screen">
          <div className="max-w-xl text-white">
            <h1 className="text-7xl">Creating Photos With Beautiful Moments</h1>
            <p className="my-6">Lorem ipsum dolor sit amet consectetur. Tortor lacus posuere magna arcu elit cras. Semper neque nisl ut consequat odio hendrerit mauris sem.</p>
            <Link href={'/portfolio'} className="btn">View Portfolio</Link>
          </div>
        </div>
      </section>
      <div className="bg-black/65 absolute top-0 left-0 min-h-screen w-full z-[-1]"></div>

      <section id="portfolio">
        <div className="section-container my-[150px]">
          <SectionTitle watermark='portfolio' title='latest work'/>
          <div className="grid grid-cols-3 gap-2 auto-rows-[300px] [&>*:nth-child(2)]:row-span-2 [&>*:nth-child(4)]:row-span-2 [&>*:nth-child(5)]:row-span-2">
            {galleryImages.map((images, index) => (
              <div key={index} className=" relative ">
                <Image src={images.imgName} fill sizes="100%" style={{objectFit:"cover"}} alt={images.alt}/>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-[75px]">
          <Link href='/portfolio' className="btn">View Portfolio</Link>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="section-container mb-[150px]">
          <SectionTitle watermark='services' title='what i offer'/>
            {services.map((service, index) => (
             <div className="flex items-center justify-between gap-20 mt-[200px] odd:text-right odd:flex-row-reverse first:mt-[50px]">
              <div className={'bg-slate-100 h-[450px] absolute max-w-[40%] w-full -z-10 ' + (index % 2 === 0 ? 'left-0' : 'right-0')}></div>
              <div key={index} className="flex-1 relative h-[300px]">
                <Image src={service.servicesImage} fill sizes="100%" style={{objectFit:"cover"}} alt={service.alt}/>
              </div>
              <div className="flex-1">
                <h4 className="text-4xl mb-4">{service.servicesName}</h4>
                <p>{service.servicesDescription}</p>
                <div className="inline-block">
                  <Link href='/services' className="flex items-center space-x-2 text-sm font-semibold mt-4 [&>*:nth-child(4)]:justify-end">
                    {index % 2 === 0 ? <><FaArrowLeftLong/><span>View More</span></> : <><span>View More</span><FaArrowRightLong/></>}
                  </Link>
                </div>
              </div>
            </div>
            ))}
        </div>
      </section>
   </main>
  );
}
