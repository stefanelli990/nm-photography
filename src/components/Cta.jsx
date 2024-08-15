import { Link } from "react-router-dom";
import ctaImage from '../assets/cta-section-image.jpg';

export default function Cta() {
  return (
    <section id="cta-section" className="relative">
        <div style={{ backgroundImage: `url(${ctaImage})` }} className="absolute top-0 left-0 bg-center bg-cover h-full w-full -z-[2]"></div>
        <div className="wrapper mx-0 max-w-lg md:max-w-2xl md:mx-auto md:text-center py-[50px] md:py-[100px] text-white z-[3]">
            <h2>Capture Moments, Create timeless Memories</h2>
            <p className="my-8">Don't miss out on the opportunity to turn your memories into timeless art. Let's work together to create stunning visuals that tell your unique story.</p>
            <Link to='/contact' className="btn">Get Started</Link>
        </div>
        <div className="bg-black/50 absolute top-0 left-0 right-0 bottom-0 -z-[1]"></div>
    </section>
  )
}