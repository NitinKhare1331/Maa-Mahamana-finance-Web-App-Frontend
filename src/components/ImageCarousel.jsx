import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import carouselImage from '../assets/carouselImage.jpg';

const images = [
    carouselImage,
    carouselImage,
    carouselImage
];

const ImageCarousel = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
        setIndex((prev) => {
            if (prev === images.length - 1) return 0;
            return prev + 1;
        });
        }, 4000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full max-w-4xl mt-28 mx-auto overflow-hidden rounded-xl shadow-xl bg-white p-4">
            <div className="relative h-44 sm:h-56 md:h-64">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={index}
                        src={images[index]}
                        className="w-full h-full object-cover rounded-xl absolute top-0 left-0"
                        initial={{ opacity: 0, x: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -200 }}
                        transition={{ duration: 0.7 }}
                    />
                </AnimatePresence>
            </div>
        </div>
    );
};

export default ImageCarousel;
