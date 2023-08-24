import { FC, useEffect, useState } from "react";

interface SlideProps {
  img: string;
  alt: string;
  description: string;
}

const Slider: FC<{ sliders: SlideProps[] }> = ({ sliders }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);

  useEffect(() => {
    const slides = [...document.querySelectorAll("[data-slide]")]; //Transform nodelist to array
    setClientWidth(slides[0]?.clientWidth);

    const sliderMove = (e: CustomEvent) => {
      setCurrentIndex(e.detail.currentIndex);
    };

    window.addEventListener("SliderMove", sliderMove as EventListener);

    return () => {
      window.removeEventListener("SliderMove", sliderMove as EventListener);
    };
  }, [currentIndex]);

  return (
    <div
      className="flex transition-transform duration-500"
      data-slide-container
      style={{ transform: `translateX(-${currentIndex * clientWidth}px)` }}
    >
      {sliders.map((slide) => (
        <div
          className="relative w-full xs:auto flex-grow flex-shrink-0 xs:basis-96 pr-4"
          data-slide
          key={slide.img}
        >
          <img
            className="object-cover h-full [@media(hover:hover)]:grayscale hover:grayscale-0 transition-all peer"
            src={slide.img}
            alt={slide.alt}
            onDragStart={() => false}
            loading="lazy"
          />
          <p className="absolute bottom-4 left-4 px-4 py-2 bg-bkg font-bold text-lg pointer-events-none tracking-wide [@media(hover:hover)]:opacity-0 peer-hover:opacity-100 transition-opacity">
            {slide.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Slider;
