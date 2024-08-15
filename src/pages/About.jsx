import { Helmet, HelmetProvider } from "react-helmet-async";
import aboutImg from "../assets/about-img.jpg";
import PageAnimation from "../components/PageAnimation";
import Footer from "../components/Footer";
import InstagramSection from "../components/InstagramSection";

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
      <PageAnimation>
        <main>
          <div className="wrapper pt-[120px] pb-[66px] md:pt-[170px] md:pb-[132px]">
            <div className="lg:flex items-center lg:gap-24">
              <div className="mb-8 lg:hidden">
                <h2 className="mb-4">Let's introduce myself</h2>
                <p className="uppercase text-slate-500 text-xs">
                  Exclusive Photographer for IStock - Photo Editor
                </p>
              </div>
              <div className="relative mb-8 w-full max-w-[400px] lg:mb-0 lg:w-1/2">
                <img src={aboutImg} alt="NM about image"
                />
                <div
                  className="bg-slate-50 w-full h-full absolute -left-4 top-4 lg:left-8 lg:top-8 -z-[1]"></div>
              </div>
              <div className="lg:w-1/2">
                <div className="hidden mb-8 lg:block">
                  <h2 className="mb-4">Let's introduce myself</h2>
                  <p className="uppercase text-slate-500 text-xs">
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
                <p className="mb-4">
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
          <InstagramSection />
          <Footer />
        </main>
      </PageAnimation>
    </HelmetProvider>
  );
}
