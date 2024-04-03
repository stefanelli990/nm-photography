import { portfolioImages } from "@/app/data";
import Image from "next/image";

export default function InstagramSection() {
    return (
        <div className="bg-slate-100 py-16 text-center px-4">
            <h3 className="uppercase mb-8">Follow me on instagram</h3>
            <ul className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4 relative">
            {portfolioImages.slice(0, 4).map((image, index) => (
                <li key={index} className="aspect-square relative ">
                <Image src={image.imgName} fill sizes="100%" style={{objectFit:"cover"}} alt={image.alt}/>
                </li>
            ))}
            <a href="https://www.instagram.com/nemanjaphotography_/" target="_blank" className="btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">@nemanjaphotography_</a>
            </ul>
        </div>
    )
}