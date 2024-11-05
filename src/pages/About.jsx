import { Helmet, HelmetProvider } from "react-helmet-async";
import aboutImg from "../assets/about-img.jpg";
import Footer from "../components/Footer";
import Cta from "../components/Cta";
import Navbar from "../components/Navbar";
import Benefits from "../components/Benefits";

export default function About() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>NM Photography | About</title>
        <meta
          name="description"
          content="Learn more about Nemanja, the photographer behind the lens. Discover his journey, inspirations, and passion for photography."
        />
      </Helmet>
      <Navbar/>
        <main>
          <section>
            <div className="wrapper">
            <div className="flex flex-col md:flex-row lg:items-center gap-12 lg:pb-8 lg:gap-24">
              <div className="relative md:w-1/2 ">
                <img src={aboutImg} alt="NM about image"/>
                <div className="bg-slate-50 h-full w-full absolute top-4 left-4 lg:top-8 lg:left-8 z-[-1]"></div>
              </div>
              <div className="md:w-1/2">
                <div className="mb-8">
                  <h2 className="mb-4">Let's introduce myself</h2>
                  <p className="uppercase text-slate-500">
                    Exclusive Photographer for IStock - Photo Editor
                  </p>
                </div>
                <p className="mb-4">Welcome to my photography portfolio!</p>
                <p className="mb-4">
                  I'm Nemanja Mohenski, a passionate photographer from Niš,
                  Serbia. My journey began with a simple curiosity about
                  capturing the world around me. Over time, this curiosity grew
                  into a deep love for photography. I find joy in exploring the
                  diverse landscapes and vibrant cultures of my homeland, always
                  seeking to capture moments that tell a story.
                </p>
                <p>
                  In my work, I focus on a variety of subjects, from intimate
                  portraits to dynamic street scenes and stunning landscapes.
                  Each image is crafted with attention to detail, aiming to
                  evoke emotion and convey a narrative. Through my lens, I
                  strive to showcase the beauty and essence of every moment,
                  turning the ordinary into the extraordinary.
                </p>
              </div>
            </div>
            </div>
          </section>
          <Benefits/>
          <Cta/>
        </main>
        <Footer />
    </HelmetProvider>
  );
}
