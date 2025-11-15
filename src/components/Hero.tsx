import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const images = [
  '/montaña.jpeg',
  '/WhatsApp Image 2025-11-14 at 9.33.28 PM.jpeg',
  '/WhatsApp Image 2025-11-14 at 9.33.27 PM (3).jpeg',
  '/WhatsApp Image 2025-11-14 at 9.33.27 PM (1).jpeg',
  '/WhatsApp Image 2025-11-14 at 9.33.26 PM (1).jpeg',
];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Après ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
        <h1 className="text-7xl md:text-9xl font-light tracking-wider mb-4">
          APRÈS
        </h1>
        <p className="text-xl md:text-2xl font-light tracking-wide mb-8">
          Coming Soon
        </p>
        <div className="text-center max-w-2xl px-6">
          <p className="text-lg md:text-xl font-light leading-relaxed">
            Hosting · Housekeeping · Amenities
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>

      <div className="absolute bottom-8 right-8 z-10 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentImage ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
