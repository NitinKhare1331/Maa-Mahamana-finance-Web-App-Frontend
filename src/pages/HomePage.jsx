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
            <div className="bg-gradient-to-br from-indigo-200 via-blue-100 to-purple-300">
                <HomeNavbar />
                <HomePageHeroSection />
                <HomeProductScroll />
                <HomeCardSection />
                <HomeAdvantageSection />
                <FaqAccordion />
                <Footer />
            </div>
        </>
    )
}

export default HomePage;