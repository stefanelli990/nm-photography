"use client"

import Image from "next/image";
import { useState } from "react";
import Cta from "@/components/cta";
import Footer from "@/components/footer";

import { portfolioImages, filterCategories } from "../data";


export default function Portfolio() {

  const [selectedCategory, setSelectedCagegory] = useState('All');

  const handleSelect = (selected) => {
    console.log(selected)
    setSelectedCagegory(selected)
  }

  const filteredImages = selectedCategory === "All" ? portfolioImages : portfolioImages.filter((image) => image.categories.includes(selectedCategory));

  return (
    <>
    <main>
      <div className="section-container pt-[100px] md:pt-[150px] mb-[50px] sm:pb-[100px]">
        <div className="flex justify-center mb-8">
            <ul className="flex">
                {filterCategories.map((category, index) => (
                  <li className="flex items-center" key={index}>
                    <button onClick={(e) => handleSelect(e.target.textContent)} className={'px-3 py-2 text-sm ' + (selectedCategory === category.name ? 'bg-primary text-white' : '')}>{category.name}</button>
                  </li>
                ))}
            </ul>
        </div>
        <div className="grid grid-cols-3 gap-4">
            {filteredImages.map((image,index) => (
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
