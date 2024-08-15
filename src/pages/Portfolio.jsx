import { useState, useEffect } from "react"
import { Helmet, HelmetProvider } from "react-helmet-async"
import { motion, AnimatePresence } from "framer-motion"
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia"
import { GrClose } from "react-icons/gr"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import Footer from "../components/Footer"
import InstagramSection from "../components/InstagramSection"
import PageAnimation from "../components/PageAnimation"

export default function Portfolio() {
  const [portfolioImages, setPortfolioImages] = useState([])
  const [open, setOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("business") // Default to the first category

  const filterCategories = ["business", "fashion", "portrait", "prom", "studio"]

  useEffect(() => {
    fetch("/data/portfolio-images.json")
      .then((response) => response.json())
      .then((data) => setPortfolioImages(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [])

  const handleFilterClick = (category) => {
    setSelectedCategory(category)
  }

  const filteredImages = portfolioImages.filter((image) => image.category === selectedCategory)

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setOpen(true);
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, transition: { duration: 0.25 } },
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>NM Photography | Portfolio</title>
        <meta
          name="description"
          content="Browse NM Photography's extensive portfolio of photography, featuring a diverse range of styles and subjects."
        />
      </Helmet>
      <PageAnimation>
        <main>
          <div className="wrapper min-h-screen pt-[120px] pb-[50px] md:pt-[170px] md:pb-[100px]">
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
                className="grid grid-cols-1 gap-4 lg:gap-12"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {filteredImages.map((img, index) => (
                  <div
                    className="overflow-hidden aspect-square sm:aspect-auto md:h-[calc(100vh-69px)] cursor-pointer group"
                    key={index}
                    onClick={() => handleImageClick(index)}
                  >
                    <img
                    loading="lazy"
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
                iconClose: () => <GrClose size={32} />,
              }}
              styles={{
                container: { backgroundColor: "rgba(0, 0, 0, .85)" },
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
