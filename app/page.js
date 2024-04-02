import Link from "next/link";
import Image from "next/image";

import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { portfolioImages, services } from "./data";

import SectionTitle from "../components/section-title";
import Cta from "../components/cta";
import Footer from "../components/footer";

import bgHeroImage from '../public/hero-img.jpg';
import Services from "@/components/services";

export default function Home() {
  return (
   <>
   <main>
      <section id="hero-section" className="relative">
        <Image src={bgHeroImage} fill priority alt="Hero image" className="object-cover z-[-2]"/>
        <div className="section-container flex flex-col items-start justify-center min-h-screen sm:min-h-[800px] text-white">
          <div className="max-w-[600px]">
            <h1>let's capture your beautiful moments</h1>
            <p className="my-6">With unique approach to photography, I take ordinary moments and transform them into extraordinary memories that will last a lifetime.</p>
            <Link href={'/portfolio'} className="btn">View Portfolio</Link>
          </div>
        </div>
      </section>
      <div className="bg-black/65 absolute top-0 left-0 min-h-screen sm:min-h-[800px] w-full z-[-1]"></div>

      <section id="portfolio">
        <div className="section-container my-[50px] sm:my-[100px]">
          <SectionTitle title='latest work'/>
          <div className="grid grid-cols-3 gap-4">
            {portfolioImages.slice(0, 6).map((images, index) => (
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
      <SectionTitle title='what i offer'/>
      <Services/>
      <Cta/>
   </main>
    <Footer/>
   </>
  );
}
