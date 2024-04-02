"use client"

import { services } from "@/app/data";
import Image from "next/image";

export default function Services() {
    
    return (
       <section id="services">
            <div className="section-container pb-[25px] sm:pb-[100px]">
            {services.map((service, index) => (
             <div key={index} className="flex items-center relative justify-between flex-col-reverse gap-10 sm:static sm:flex-row-reverse text-right md:gap-20 mb-[50px] odd:text-left sm:mt-[125px] sm:odd:flex-row">
              <div className={'bg-slate-100 h-[300px] sm:h-[450px] absolute bottom-[-25px] sm:bottom-auto max-w-[90%] sm:max-w-[40%] w-full -z-10 ' + (index % 2 === 0 ? '-left-4 sm:-left-0' : '-right-4 sm:-right-0')}></div>
              <div className="w-full sm:w-auto sm:flex-1 relative h-[250px] sm:h-[350px]">
                <Image src={service.servicesImage} fill sizes="100%" style={{objectFit:"cover"}} alt={service.alt}/>
              </div>
              <div className="flex-1">
                <h3 className="mb-4">{service.servicesName}</h3>
                <p>{service.servicesDescription}</p>
              </div>
            </div>
            ))}
            </div>
        </section>
    )
}