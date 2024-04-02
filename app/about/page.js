import Cta from '@/components/cta';
import aboutImg from '../../public/about-img.jpg'

import Image from "next/image";
import Footer from '@/components/footer';

export default function About() {
    return (
        <>
        <main>
            <section id='about-section'>
                <div className="section-container pt-[100px] pb-[50px] sm:py-[100px]">
                    <div className='lg:flex items-center justify-center lg:gap-16 xl:gap-24'>
                        <div className='mb-8 lg:hidden'>
                            <h3 className='mb-4'>My name is Nemanja</h3>
                            <p className='uppercase opacity-50 text-xs'>Exclusive Photographer for IStock - Photo Editor</p>
                        </div>
                        <div className='relative flex-1 mb-8 w-full max-w-[500px] lg:mb-0'>
                            <Image src={aboutImg} sizes="100%" priority alt='Nemanja Mohenski posing'/>
                        </div>
                        <div className='flex-1'>
                            <div className='hidden mb-12 lg:block'>
                                <h3 className='mb-4'>My name is Nemanja</h3>
                                <p className='uppercase opacity-50 text-xs'>Exclusive Photographer for IStock - Photo Editor</p>
                            </div>
                            <p className='mb-4'>
                            I value family, nostalgia, movies, good conversation, and love. I feel so lucky to be surrounded by the best humans in the world and I cherish them so much. Some days I wish I could just stop time, and soak this all in for as long as possible. 
                            </p>
                            <p className='mb-4'>
                            When I photograph weddings, my goal is to find these same connections and wonderful people in my clients lives and document how much love there is between them. My goal is to witness you, to see you fully for who you are and how beautiful you and your love is. 
                            </p>
                            <p>Reach out and connect with any questions you may have, or simply drop me a line and tell me what you love the most in life.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Cta/>
        </main>
        <Footer/>
        </>
    )
}