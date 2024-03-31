import Link from 'next/link';
import Image from 'next/image';
import ctaImage from '../../public/cta-img.jpg';

export default function Cta() {
    return (
        <section className='relative'>
            <Image src={ctaImage} fill priority alt="Cta image" className="object-cover z-[-2]"/>
            <div className="bg-black/50 absolute top-0 left-0 h-full w-full z-[-1]"></div>
            <div className="section-container py-[50px] sm:py-[100px] text-white">
                <div className='text-center max-w-xl mx-auto'>
                    <h2 className='text-3xl md:text-5xl'>Are you ready to start new project wit me?</h2>
                    <p className='my-8'>Lorem ipsum dolor sit amet consectetur. Tortor lacus posuere magna arcu elit cras. Semper neque nisl ut consequat odio hendrerit mauris sem.</p>
                    <Link href='/contact' className='btn'>Get started</Link>
                </div>
            </div>
        </section>
    )
}