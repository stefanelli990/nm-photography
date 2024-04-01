import Image from "next/image";

import Cta from "@/components/cta";
import Footer from "@/components/footer";

import { portfolioImages } from "../data";

export default function Portfolio() {
  return (
    <>
    <main>
      <div className="section-container mt-[150px] mb-[50px] sm:mb-[100px]">
        <div className="flex justify-center mb-8">
            <ul className="flex space-x-4">
                <li className="opacity-25">All</li>
                <li>Fashion</li>
                <li>Weeding</li>
                <li>Event</li>
                <li>Business</li>
            </ul>
        </div>
        <div className="grid grid-cols-3">
            {portfolioImages.map((image,index) => (
                <div key={index} className="aspect-square relative">
                <Image
                src={image.imgName}
                alt={image.alt}
                fill sizes="100%" style={{objectFit:"cover"}}
                />
            </div>
            ))}
        </div>
      </div>
      <Cta/>
    </main>
    <Footer/>
    </>
  );
}
