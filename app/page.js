import Link from "next/link";
import Image from "next/image";

import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { portfolioImages, services } from "./data";

import SectionTitle from "../components/section-title";
import Cta from "../components/cta";
import Footer from "../components/footer";

import bgHeroImage from '../public/hero-img.jpg';

export default function Home() {
  return (
   <>
   <main>
      <section id="hero-section" className="relative">
        <Image src={bgHeroImage} fill priority alt="Hero image" className="object-cover z-[-2]"/>
        <div className="section-container flex flex-col items-start justify-center min-h-screen sm:min-h-[800px] text-white">
          <div className="max-w-[600px]">
            <h1>let's capture your beautiful moments</h1>
            <p className="my-6">With our unique approach to photography, we take ordinary moments and transform them into extraordinary memories that will last a lifetime.</p>
            <Link href={'/portfolio'} className="btn">View Portfolio</Link>
          </div>
        </div>
      </section>
      <div className="bg-black/65 absolute top-0 left-0 min-h-screen sm:min-h-[800px] w-full z-[-1]"></div>

      <section id="portfolio">
        <div className="section-container my-[50px] sm:my-[100px]">
          <SectionTitle watermark='portfolio' title='latest work'/>
          <div className="grid grid-cols-3">
            {portfolioImages.map((images, index) => (
              <div key={index} className="aspect-square relative first-of-type:col-span-2 first-of-type:row-span-2">
                <Image src={images.imgName} fill sizes="100%" style={{objectFit:"cover"}} alt={images.alt}/>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-[50px] sm:mt-[75px]">
          <Link href='/portfolio' className="btn">View Portfolio</Link>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="section-container mb-[75px] sm:mb-[150px]">
          <SectionTitle watermark='services' title='what i offer'/>
            {services.map((service, index) => (
             <div key={index} className="flex items-center relative justify-between flex-col-reverse gap-10 sm:static sm:flex-row md:gap-20 mb-[50px] odd:text-right sm:mt-[125px] sm:odd:flex-row-reverse">
              <div className={'bg-slate-100 h-[300px] sm:h-[450px] absolute bottom-[-25px] sm:bottom-auto max-w-[90%] sm:max-w-[40%] w-full -z-10 ' + (index % 2 === 0 ? '-left-4 sm:-left-0' : '-right-4 sm:-right-0')}></div>
              <div className="w-full sm:w-auto sm:flex-1 relative h-[250px] sm:h-[350px]">
                <Image src={service.servicesImage} fill sizes="100%" style={{objectFit:"cover"}} alt={service.alt}/>
              </div>
              <div className="flex-1">
                <h2 className="mb-4">{service.servicesName}</h2>
                <p>{service.servicesDescription}</p>
                <div className="inline-block">
                  <Link href='/services' className="flex items-center sm:space-x-2 text-sm font-semibold mt-4 [&>*:nth-child(4)]:justify-end">
                    {index % 2 === 0 ? <><FaArrowLeftLong className="hidden sm:block"/><span>View More</span></> : <><span>View More</span><FaArrowRightLong className="hidden sm:block"/></>}
                  </Link>
                </div>
              </div>
            </div>
            ))}
        </div>
      </section>
      <Cta/>
   </main>
    <Footer/>
   </>
  );
}
