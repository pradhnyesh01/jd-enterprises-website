import { useEffect, useState } from "react";
import hero1 from "../assets/herocctv.jpg";
import hero2 from "../assets/heroprojector.jpg";
import hero3 from "../assets/herospeaker.jpg";

const images = [hero1, hero2, hero3];

export default function Hero({ onOpenModal }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background Slides */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt="Hero Slide"
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Dark Blue Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/85 via-blue-900/80 to-blue-800/75"></div>

      {/* Content Wrapper */}
      <div className="relative w-full px-10 lg:px-24 xl:px-36 py-20">

        <div className="max-w-6xl space-y-10 text-white">

          {/* Badge */}
          <div className="inline-block bg-white/20 text-sm px-6 py-2 rounded-full font-medium backdrop-blur-sm">
            Government Registered Contractor • Since 2017
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
            Integrated Audio Systems,
            <br />
            CCTV Surveillance &
            <br />
            Professional Projection Solutions
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-200 max-w-3xl">
            Delivering reliable and scalable audio-visual, surveillance and
            lighting solutions for institutions, corporate offices and
            industrial facilities.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 pt-8 text-sm">
            <div>
              <div className="text-3xl font-bold">8+</div>
              <div className="text-gray-200">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold">150+</div>
              <div className="text-gray-200">Installations</div>
            </div>
            <div>
              <div className="text-3xl font-bold">GST</div>
              <div className="text-gray-200">Registered</div>
            </div>
            <div>
              <div className="text-3xl font-bold">1.5–5 Cr</div>
              <div className="text-gray-200">Annual Turnover</div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-5 flex-wrap pt-6">
            <button
              onClick={onOpenModal}
              className="bg-white text-blue-900 px-8 py-3 font-semibold rounded-md hover:scale-105 transition"
            >
              Get Quote
            </button>

            <a
              href="#services"
              className="border border-white px-8 py-3 font-semibold rounded-md hover:bg-white hover:text-blue-900 transition"
            >
              Our Services
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
