import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import ProductGrid from "../components/ProductGrid.jsx";
import ImageCarousel from "../components/ImageCarousel.jsx"
import FaqAccordion from "../components/FaqAccordion.jsx"

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <ImageCarousel />
      <ProductGrid />
      <FaqAccordion />
      <Footer />
    </>
  );
};

export default LandingPage;
