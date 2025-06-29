import { useEffect, useState } from "react";
import carouselImage1 from "../assets/carouselImage1.jpg";
import carouselImage2 from "../assets/carouselImage2.jpg";

const images = [
    {
        src: carouselImage1,
        title: "Empower Your Finances",
        description:
        "Take control of your money with smart tools and personalized support from Maa Mahamaya Finance.",
        cta: "Get Started",
    },
    {
        src: carouselImage2,
        title: "Fast & Secure Services",
        description:
        "Experience lightning-fast and secure financial services trusted by thousands across India.",
        cta: "Explore Services",
    },
];

const ImageCarousel = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="max-w-7xl mx-auto mt-28 px-4">
            <div className="bg-gradient-to-br from-indigo-100 via-blue-100 to-violet-100 rounded-2xl overflow-hidden shadow-xl">
                <div className="flex flex-col-reverse md:flex-row items-center">
                    <div className="w-full md:w-1/2 p-8 md:p-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4">
                        {images[index].title}
                        </h2>
                        <p className="text-gray-700 text-base md:text-lg mb-6">
                        {images[index].description}
                        </p>
                        <button className="bg-indigo-600 text-white px-6 py-2 rounded-full shadow hover:bg-indigo-700 transition duration-300">
                        {images[index].cta}
                        </button>
                    </div>
                    <div className="w-full md:w-1/2 h-60 sm:h-72 md:h-[400px] relative overflow-hidden flex items-center justify-center px-4 md:pr-20">
                        <img
                            key={index}
                            src={images[index].src}
                            alt="Carousel"
                            className="max-h-full w-auto object-contain transition-opacity duration-700 ease-in-out rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageCarousel;
