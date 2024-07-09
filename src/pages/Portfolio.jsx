import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import { GrClose } from "react-icons/gr";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Footer from "../components/Footer";
import InstagramSection from "../components/InstagramSection";
import PageAnimation from "../components/PageAnimation";
import portfolioImg1 from "../assets/portfolio-img-1.jpg";
import portfolioImg2 from "../assets/portfolio-img-2.jpg";
import portfolioImg3 from "../assets/portfolio-img-3.webp";
import portfolioImg4 from "../assets/portfolio-img-4.webp";
import portfolioImg5 from "../assets/portfolio-img-5.webp";
import portfolioImg6 from "../assets/portfolio-img-6.webp";
import portfolioImg7 from "../assets/portfolio-img-7.webp";
import portfolioImg8 from "../assets/portfolio-img-8.webp";
import portfolioImg9 from "../assets/portfolio-img-9.webp";
import portfolioImg10 from "../assets/portfolio-img-10.webp";
import portfolioImg11 from "../assets/portfolio-img-11.webp";
import portfolioImg12 from "../assets/portfolio-img-12.webp";

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filterCategories = ["all", "weddings", "business", "model", "party"];

  const portfolioImages = [
    { path: portfolioImg2, category: "weddings" },
    { path: portfolioImg3, category: "weddings" },
    { path: portfolioImg1, category: "weddings" },
    { path: portfolioImg4, category: "business" },
    { path: portfolioImg5, category: "business" },
    { path: portfolioImg6, category: "business" },
    { path: portfolioImg7, category: "model" },
    { path: portfolioImg8, category: "model" },
    { path: portfolioImg9, category: "model" },
    { path: portfolioImg10, category: "party" },
    { path: portfolioImg11, category: "party" },
    { path: portfolioImg12, category: "party" },
  ];

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredImages =
    selectedCategory === "all"
      ? portfolioImages
      : portfolioImages.filter((image) => image.category === selectedCategory);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setOpen(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, transition: { duration: 0.25 } },
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Nemanja Photography | Portfolio</title>
        <meta
          name="description"
          content="Browse Nemanja's extensive portfolio of photography, featuring a diverse range of styles and subjects."
        />
      </Helmet>
      <PageAnimation>
        <main>
          <div className="wrapper pt-[120px] pb-[50px] md:pt-[170px] md:pb-[100px]">
            <div className="flex justify-between gap-y-4 gap-x-8 mb-[50px] flex-wrap">
              <h2>Search by category</h2>
              <div className="flex flex-wrap gap-y-2 gap-x-1">
                {filterCategories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => handleFilterClick(category)}
                    className={`px-3 py-1 capitalize ${
                      selectedCategory === category ? "active" : ""
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory}
                className="columns-3"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {filteredImages.map((img, index) => (
                  <div
                    className="mb-4 overflow-hidden cursor-pointer group"
                    key={index}
                    onClick={() => handleImageClick(index)}
                  >
                    <img
                      src={img.path}
                      alt=""
                      className="group-hover:scale-125 duration-500"
                    />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
          {open && (
            <Lightbox
              render={{
                iconPrev: () => <LiaAngleLeftSolid size={40} />,
                iconNext: () => <LiaAngleRightSolid size={40} />,
                iconClose: () => <GrClose size={20} />,
              }}
              styles={{
                container: { backgroundColor: "rgba(0, 0, 0, .75)" },
                slide: { cursor: "grab" },
              }}
              open={open}
              close={() => setOpen(false)}
              slides={filteredImages.map((image) => ({ src: image.path }))}
              index={currentImageIndex}
            />
          )}
          <InstagramSection />
          <Footer />
        </main>
      </PageAnimation>
    </HelmetProvider>
  );
}
