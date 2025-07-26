const Hero: React.FC = () => {
    return (
        <section className="h-screen flex items-center justify-center text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 to-purple-600/30"></div>

            {/* Floating animation elements */}

            <div className="relative z-10 max-w-4xl mx-auto px-4">
                <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-slide-up">
                    Explore the City
                </h1>
                <p className="text-xl md:text-2xl mb-8 animate-slide-up animation-delay-300">
                    Discover hidden gems and iconic landmarks with our expert guides
                </p>
                <a
                    href="#tours"
                    className="inline-block bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold py-4 px-8 rounded-full text-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-slide-up animation-delay-600"
                >
                    Start Your Adventure
                </a>
            </div>
        </section>
    );
};

/*
             <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 20}s`,
                            animationDuration: `${15 + Math.random() * 10}s`
                        }}
                    />
                ))}
            </div>

 */
export default Hero;
