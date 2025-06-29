import HeroImage from '../../assets/heroImage.jpg';

const HomePageHeroSection = () => {
    return (
        <section className="py-12 px-4 md:px-8 mt-16">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
            <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug mb-2">
                <span className="text-indigo-600">India's Trusted Financial Partner</span>
                <br />
            </h1>
            <span className="text-2xl font-medium text-gray-700">
                Empowering Dreams with the Right Finance
            </span>
            <p className="mt-4 text-gray-600 text-sm md:text-base max-w-md mx-auto md:mx-0">
                Unlock better offers, faster approvals, and smarter financial solutions all in one place.
            </p>
            </div>
            <div className="flex-1 w-full">
            <img
                src={HeroImage}
                alt="Insurance Banner"
                className="w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto rounded-xl shadow-lg"
            />
            </div>
        </div>
    </section>
    );
};

export default HomePageHeroSection;
