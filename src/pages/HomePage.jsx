import HomeAdvantageSection from "../components/HomePageComponents/HomeAdvantageSection.jsx";
import HomeCardSection from "../components/HomePageComponents/HomeCardsSection.jsx";
import HomeNavbar from "../components/HomePageComponents/HomeNavbar.jsx";
import HomePageHeroSection from "../components/HomePageComponents/HomePageHeroSection.jsx";
import HomeProductScroll from "../components/HomePageComponents/HomeProductScroll.jsx";
import Footer from "../components/Footer.jsx"
import FaqAccordion from "../components/FaqAccordion.jsx"

const HomePage = () => {
    return (
        <>
            <HomeNavbar />
            <HomePageHeroSection />
            <HomeProductScroll />
            <HomeCardSection />
            <HomeAdvantageSection />
            <FaqAccordion />
            <Footer />
        </>
    )
}

export default HomePage;