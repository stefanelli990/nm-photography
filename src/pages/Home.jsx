import Services from "../components/Services";
import Hero from "../components/Hero";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import InstagramSection from "../components/InstagramSection";
import PageAnimation from "../components/PageAnimation";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Home() {
    return (
        <HelmetProvider>
        <Helmet>
                <title>NM Photography | Home</title>
                <meta name="description" content="Welcome to NM Photography portfolio. Discover breathtaking images and explore the artistry behind each shot." />
            </Helmet>
        <PageAnimation>
            <main>
                <Hero/>
                <Services/>
                <Cta/>
                <InstagramSection/>
                <Footer/>
            </main>
        </PageAnimation>
        </HelmetProvider>
    )
}