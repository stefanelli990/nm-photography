import ctaImage from '../assets/cta-section-image.jpg';
import Btn from "../components/Btn";

export default function Cta() {
  return (
    <section id="cta-section" className="relative my-0 py-[50px] lg:py-[100px]">
        <div style={{ backgroundImage: `url(${ctaImage})` }} className="absolute top-0 left-0 bg-center bg-cover h-full w-full -z-[2]"></div>
        <div className="wrapper ">

            <div className='mx-auto max-w-2xl flex flex-col gap-6 justify-center items-center text-center text-white'>
            <h2>Capture Moments, Create timeless Memories</h2>
            <p>Don’t miss out on the opportunity to turn your memories into timeless art. I’m excited to collaborate with you and create stunning visuals that reflect who you are, preserving moments you’ll cherish for years to come. Let’s make something extraordinary that you’ll be proud to share.</p>
            <Btn btnPath={'/contact'} btnText={'get started'} btnStyle={'btn btn-outlined btn-outlined-white'}/>
            </div>
        </div>
        <div className="bg-black/50 absolute top-0 left-0 right-0 bottom-0 z-[-2]"></div>
    </section>
  )
}