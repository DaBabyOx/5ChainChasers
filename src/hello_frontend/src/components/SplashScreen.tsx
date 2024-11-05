// src/components/Carousel.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Spotlight } from './ui/Spotlight';

const slides = [
    {
        word: 'Welcome to Your Creative Playground!',
        color: 'bg-gradient-to-br from-black via-black to-blue-900',
    },
    {
        word: 'Upload Your Art Earn Revenue!',
        color: 'bg-gradient-to-br from-black via-black to-green-900',
    },
    {
        word: 'Find What You Need, Sell it Your Best!',
        color: 'bg-gradient-to-br from-black via-black to-red-900',
    },
];

const SplashScreen: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    // Auto slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-black to-gray-900">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 flex pb-10 items-center justify-center text-white/80 text-2xl lg:text-5xl md:text-3xl font-serif italic transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        } ${slide.color}`}
                >
                    {slide.word}
                </div>
            ))}

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                <div className="flex flex-row space-x-2">
                    {slides.map((_, idx) => (
                        <span
                            key={idx}
                            className={`block w-7 h-1 rounded-full transition-all duration-300 ${currentIndex === idx ? 'bg-white' : 'bg-gray-400'
                                }`}
                        ></span>
                    ))}
                </div>
                <div className="login-container mt-8 text-white">
                    <button 
                        onClick={() => navigate('/register')} 
                        className="mt-4 rounded-lg bg-white/10 hover:bg-white/15 hover:transition-all duration-500 px-24 w-full py-2"
                    >
                        <p className="text-white/50 font-normal md:font-semibold text-xl">
                            Let's Go!
                        </p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;
