import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaPhoneAlt } from "react-icons/fa";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { PiMapPinFill } from "react-icons/pi";
import PageAnimation from "../components/PageAnimation";
import Footer from "../components/Footer";
import InstagramSection from "../components/InstagramSection";

export default function Contact() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>NM Photography | Contact</title>
        <meta
          name="description"
          content="Get in touch with NM for photography inquiries, collaborations, or booking sessions. We're here to help you capture your moments beautifully."
        />
      </Helmet>
      <PageAnimation>
        <main>
          <div className="wrapper pt-[120px] pb-[50px] md:pt-[170px] md:pb-[100px] ">
            <div className="flex items-center flex-col md:flex-row gap-8 md:gap-16 lg:gap-24">
              <div className="flex-1">
                <h2>Get in touch</h2>
                <p className="pt-4">
                  Whether you're looking to capture the beauty of a special
                  moment, need professional images for your business, or simply
                  want to discuss a creative idea, I'm here to help. Feel free
                  to reach out if you have a project in mind, want to
                  collaborate, or just want to chat about photography.
                </p>
                <ul className="space-y-3 hidden md:block md:pt-8">
                  <li className="flex items-center space-x-3">
                    <BsFillEnvelopeFill />
                    <span>nemanja.mohenski@gmail.com</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <FaPhoneAlt />
                    <span>+381 69 101 9376</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <PiMapPinFill />
                    <span>Niš, Serbia</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1 w-full">
                <form action="">
                  <div className="flex flex-col gap-2 mb-4">
                    <label className="text-xs" htmlFor="full-name">
                      Full Name
                    </label>
                    <input
                      className="border border-slate-300 p-3"
                      type="text"
                      id="full-name"
                      name="full-name"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2 mb-4">
                    <label className="text-xs" htmlFor="email">
                      Email Adress
                    </label>
                    <input
                      className="border border-slate-300 p-3"
                      type="text"
                      name="email"
                      id="email"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2 mb-4">
                    <label className="text-xs" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className="resize-none border border-slate-300 p-3"
                      name="message"
                      id="message"
                      rows={6}
                      required
                    ></textarea>
                  </div>
                  <button className="p-4 w-full bg-black text-white">
                    Send Message
                  </button>
                </form>
              </div>
              <ul className="space-y-3 w-full md:hidden">
                <li className="flex items-center space-x-3">
                  <BsFillEnvelopeFill />
                  <span>nemanja.mohenski@gmail.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <FaPhoneAlt />
                  <span>+381 69 101 9376</span>
                </li>
                <li className="flex items-center space-x-3">
                  <PiMapPinFill />
                  <span>Niš, Serbia</span>
                </li>
              </ul>
            </div>
          </div>
          <InstagramSection />
          <Footer />
        </main>
      </PageAnimation>
    </HelmetProvider>
  );
}
