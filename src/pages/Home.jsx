import Services from "../components/Services";
import Hero from "../components/Hero";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>NM Photography | Home</title>
        <meta
          name="description"
          content="Welcome to NM Photography portfolio. Discover breathtaking images and explore the artistry behind each shot."
        />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Cta />
      </main>
      <Footer />
    </HelmetProvider>
  );
}
