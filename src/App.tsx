import "./App.css";
import hero from "./img/hero.jpg";
import hero_xs from "./img/hero-xs.jpg";
import hero_sm from "./img/hero-sm.jpg";
import hero_md from "./img/hero-md.jpg";
import hero_lg from "./img/hero-lg.jpg";
import slide_1 from "./img/slider-1.jpg";
import slide_2 from "./img/slider-2.jpg";
import slide_3 from "./img/slider-3.jpg";
import slide_4 from "./img/slider-4.jpg";
import slide_5 from "./img/slider-5.jpg";
import slide_6 from "./img/slider-6.jpg";
import slide_7 from "./img/slider-7.jpg";
import slide_8 from "./img/slider-8.jpg";
import map from "./img/map.png";
import SliderControllers from "./components/SliderControllers";
import Slider from "./components/Slider";
import ContactForm from "./components/ContactForm";
import Section from "./components/Section";
import IntersectComponentFade from "./components/IntersectComponentFade";

const sliders = [
  {
    img: slide_1,
    alt: "Iceland Scene",
    description: "Ocean Wonders",
  },
  {
    img: slide_2,
    alt: "Iceland Scene",
    description: "Ocean Wonders",
  },
  {
    img: slide_3,
    alt: "Iceland Scene",
    description: "Ocean Wonders",
  },
  {
    img: slide_4,
    alt: "Iceland Scene",
    description: "Ocean Wonders",
  },
  {
    img: slide_5,
    alt: "Iceland Scene",
    description: "Ocean Wonders",
  },
  {
    img: slide_6,
    alt: "Iceland Scene",
    description: "Ocean Wonders",
  },
  {
    img: slide_7,
    alt: "Iceland Scene",
    description: "Ocean Wonders",
  },
  {
    img: slide_8,
    alt: "Iceland Scene",
    description: "Ocean Wonders",
  },
];

function App() {
  return (
    <div
      className="h-screen pb-12 sm:pb-0 overflow-y-auto overflow-x-hidden relative scroll-smooth perspective"
      id="parallax"
    >
      <nav
        className="grid place-items-center absolute w-full top-0 left-0 z-50 drop-shadow-text-sm"
        aria-label="Primary Navigation"
      >
        <a
          href="/"
          aria-label="Go Home"
          className="p-2 m-4 focus:outline-none focus-visible:ring-4 ring-accent rounded-full transition-shadow"
        >
          <svg
            width="280"
            className="w-32 sm:w-48 lg:56"
            viewBox="0 0 357 86"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.555 21.228c-3.033.534-4.35 4.151-2.37 6.51l21.78 25.957c1.98 2.359 5.77 1.69 6.823-1.203l11.59-31.84c1.053-2.894-1.421-5.843-4.454-5.308l-33.37 5.884ZM84.795 63.81c3.032-.534 4.349-4.151 2.37-6.51l-21.78-25.957c-1.98-2.359-5.77-1.69-6.824 1.203L46.972 64.387c-1.053 2.894 1.421 5.842 4.453 5.308l33.37-5.884ZM127.81 64.52V22.76h9.42v41.76h-9.42Zm-13.26-34.14v-8.22h35.94v8.22h-35.94Zm34.559 34.14V35.36h9.18v29.16h-9.18Zm9.18-16.02-3.84-3c.76-3.4 2.04-6.04 3.84-7.92 1.8-1.88 4.3-2.82 7.5-2.82 1.4 0 2.62.22 3.66.66 1.08.4 2.02 1.04 2.82 1.92l-5.46 6.9c-.4-.44-.9-.78-1.5-1.02s-1.28-.36-2.04-.36c-1.52 0-2.74.48-3.66 1.44-.88.92-1.32 2.32-1.32 4.2Zm27.785 16.62c-2.68 0-5.08-.66-7.2-1.98-2.08-1.32-3.74-3.12-4.98-5.4-1.2-2.28-1.8-4.88-1.8-7.8s.6-5.52 1.8-7.8c1.24-2.28 2.9-4.08 4.98-5.4 2.12-1.32 4.52-1.98 7.2-1.98 1.96 0 3.72.38 5.28 1.14 1.6.76 2.9 1.82 3.9 3.18 1 1.32 1.56 2.84 1.68 4.56v12.6c-.12 1.72-.68 3.26-1.68 4.62-.96 1.32-2.24 2.36-3.84 3.12-1.6.76-3.38 1.14-5.34 1.14Zm1.86-8.28c1.96 0 3.54-.64 4.74-1.92 1.2-1.32 1.8-2.98 1.8-4.98 0-1.36-.28-2.56-.84-3.6a5.51 5.51 0 0 0-2.28-2.4c-.96-.6-2.08-.9-3.36-.9-1.28 0-2.42.3-3.42.9-.96.56-1.74 1.36-2.34 2.4-.56 1.04-.84 2.24-.84 3.6 0 1.32.28 2.5.84 3.54a6.293 6.293 0 0 0 2.34 2.46c1 .6 2.12.9 3.36.9Zm6.18 7.68v-7.86l1.38-7.08-1.38-7.08v-7.14h9v29.16h-9Zm24.644 0-12.36-29.16h9.9l8.4 24.3h-4.32l8.4-24.3h9.72l-12.36 29.1-7.38.06Zm36.626.66c-3.16 0-5.98-.64-8.46-1.92-2.44-1.32-4.36-3.14-5.76-5.46-1.4-2.32-2.1-4.94-2.1-7.86s.68-5.52 2.04-7.8c1.4-2.32 3.28-4.14 5.64-5.46 2.36-1.32 5.02-1.98 7.98-1.98 2.88 0 5.42.62 7.62 1.86 2.2 1.24 3.92 2.96 5.16 5.16 1.28 2.2 1.92 4.72 1.92 7.56 0 .52-.04 1.08-.12 1.68-.04.56-.14 1.22-.3 1.98l-25.14.06v-6.3l21.24-.06-3.96 2.64c-.04-1.68-.3-3.06-.78-4.14-.48-1.12-1.2-1.96-2.16-2.52-.92-.6-2.06-.9-3.42-.9-1.44 0-2.7.34-3.78 1.02-1.04.64-1.86 1.56-2.46 2.76-.56 1.2-.84 2.66-.84 4.38 0 1.72.3 3.2.9 4.44.64 1.2 1.52 2.14 2.64 2.82 1.16.64 2.52.96 4.08.96 1.44 0 2.74-.24 3.9-.72a8.893 8.893 0 0 0 3.06-2.28l5.04 5.04a13.606 13.606 0 0 1-5.22 3.78c-2.04.84-4.28 1.26-6.72 1.26Zm18.471-.66V35.36h9.18v29.16h-9.18Zm9.18-16.02-3.84-3c.76-3.4 2.04-6.04 3.84-7.92 1.8-1.88 4.3-2.82 7.5-2.82 1.4 0 2.62.22 3.66.66 1.08.4 2.02 1.04 2.82 1.92l-5.46 6.9c-.4-.44-.9-.78-1.5-1.02s-1.28-.36-2.04-.36c-1.52 0-2.74.48-3.66 1.44-.88.92-1.32 2.32-1.32 4.2Zm26.401 16.74c-1.72 0-3.42-.22-5.1-.66-1.64-.44-3.18-1.06-4.62-1.86-1.4-.84-2.6-1.8-3.6-2.88l5.22-5.28c.96 1.04 2.1 1.86 3.42 2.46 1.32.56 2.76.84 4.32.84 1.08 0 1.9-.16 2.46-.48.6-.32.9-.76.9-1.32 0-.72-.36-1.26-1.08-1.62-.68-.4-1.56-.74-2.64-1.02-1.08-.32-2.22-.66-3.42-1.02-1.2-.36-2.34-.86-3.42-1.5s-1.96-1.52-2.64-2.64c-.68-1.16-1.02-2.62-1.02-4.38 0-1.88.48-3.5 1.44-4.86.96-1.4 2.32-2.5 4.08-3.3 1.76-.8 3.82-1.2 6.18-1.2 2.48 0 4.76.44 6.84 1.32 2.12.84 3.84 2.1 5.16 3.78l-5.22 5.28c-.92-1.08-1.96-1.84-3.12-2.28-1.12-.44-2.22-.66-3.3-.66-1.04 0-1.82.16-2.34.48-.52.28-.78.7-.78 1.26 0 .6.34 1.08 1.02 1.44.68.36 1.56.68 2.64.96 1.08.28 2.22.62 3.42 1.02 1.2.4 2.34.94 3.42 1.62 1.08.68 1.96 1.6 2.64 2.76.68 1.12 1.02 2.6 1.02 4.44 0 2.84-1.08 5.1-3.24 6.78-2.12 1.68-5 2.52-8.64 2.52Zm31.261-.06c-3.16 0-5.98-.64-8.46-1.92-2.44-1.32-4.36-3.14-5.76-5.46-1.4-2.32-2.1-4.94-2.1-7.86s.68-5.52 2.04-7.8c1.4-2.32 3.28-4.14 5.64-5.46 2.36-1.32 5.02-1.98 7.98-1.98 2.88 0 5.42.62 7.62 1.86 2.2 1.24 3.92 2.96 5.16 5.16 1.28 2.2 1.92 4.72 1.92 7.56 0 .52-.04 1.08-.12 1.68-.04.56-.14 1.22-.3 1.98l-25.14.06v-6.3l21.24-.06-3.96 2.64c-.04-1.68-.3-3.06-.78-4.14-.48-1.12-1.2-1.96-2.16-2.52-.92-.6-2.06-.9-3.42-.9-1.44 0-2.7.34-3.78 1.02-1.04.64-1.86 1.56-2.46 2.76-.56 1.2-.84 2.66-.84 4.38 0 1.72.3 3.2.9 4.44.64 1.2 1.52 2.14 2.64 2.82 1.16.64 2.52.96 4.08.96 1.44 0 2.74-.24 3.9-.72a8.893 8.893 0 0 0 3.06-2.28l5.04 5.04a13.606 13.606 0 0 1-5.22 3.78c-2.04.84-4.28 1.26-6.72 1.26Z"
              fill="#fff"
            />
          </svg>
        </a>
      </nav>
      <header className="min-h-screen flex flex-col justify-evenly items-center relative preserve-3d">
        <div className="absolute bg-gradient-to-b inset-0 bottom-3/4 from-accent to-transparent"></div>
        <div className="absolute bg-gradient-to-t inset-0 -bottom-32 from-bkg/80 to-transparent distance-1"></div>
        <img
          sizes="(min-width: 500px) 480w, 650w, 800w, 1300w"
          srcSet={`${hero_xs} 480w, ${hero_sm} 650w, ${hero_md} 800w, ${hero_lg} 1300w`}
          className="absolute h-full w-full -z-20 object-cover object-center distance-1"
          src={hero}
          aria-hidden="true"
        />
        <h1 className="text-5xl text-center font-bold text-white tracking-wide py-12 drop-shadow-text-sm lg:drop-shadow-text-lg distance-2">
          Unique Tripes for Adventurous Travelers
        </h1>
        <a
          href="#contact-form"
          className="bg-accent text-bkg font-medium py-3 px-8 rounded-full border border-bkg focus:outline-none focus-visible:ring-4 ring-accent ring-offset-2 ring-offset-bkg hover:bg-accent/90 drop-shadow-text-md hover:drop-shadow-none transition shadow duration-300 distance-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 inline-block mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
            />
          </svg>
          <span className="uppercase tracking-wide">Book a Trip</span>
        </a>
      </header>
      <main className="relative mt-16 sm:mt-24 lg:mt-40 pb-16 -mb-16 grid gap-16 sm:gap-24 lg:gap-40 overflow-hidden">
        <IntersectComponentFade>
          <Section
            smallText="What dreams are made of"
            title="Trips for Explorers"
          >
            We find once-in-a-lifetime locations and reserve them for travelers
            full of adventure. Classing all explorers and extremists to the trip
            of their dreams in the most exotic locations all around the globe.
          </Section>
        </IntersectComponentFade>
        <IntersectComponentFade>
          <section
            aria-labelledby="slider"
            className="container grid gap-4 text-center sm:text-left"
          >
            <div className="relative">
              <div className="hidden sm:block absolute w-8 bg-accent/10 -left-4 h-full"></div>
              <div>
                <small className="tracking-widest text-accent uppercase drop-shadow-text-sm">
                  Off The Beaten Path
                </small>
                <h2
                  id="headline"
                  className="text-3xl font-bold tracking-wide drop-shadow-text-md"
                >
                  Places without People
                </h2>
              </div>
              <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-between items-center space-x-4 space-y-4">
                <p className="text-muted max-w-2xl drop-shadow-text-sm">
                  We find once-in-a-lifetime locations and reserve them for
                  travelers full of adventure. Classing all explorers and
                  extremists to the trip of their dreams in the most exotic
                  locations all around the globe.
                </p>
                <SliderControllers slidersLength={sliders.length} />
              </div>
            </div>
          </section>
        </IntersectComponentFade>

        <IntersectComponentFade>
          <div className="-mt-10 sm:-mt-20 lg:-mt-36 container xs:w-screen">
            <Slider sliders={sliders} />
          </div>
        </IntersectComponentFade>

        <section
          className="container flex flex-wrap md:space-x-16 space-y-12 md:space-y-0 md:justify-between md:items-center"
          aria-labelledby="map"
        >
          <IntersectComponentFade>
            <img
              src={map}
              alt="Map"
              width="400"
              className="grow md:flex-1"
              loading="lazy"
            />
          </IntersectComponentFade>
          <div className="grid gap-4 text-center md:text-left grow md:flex-1">
            <div className="relative">
              <div className="hidden md:block absolute w-8 bg-accent/10 -left-4 h-full"></div>
              <small className="tracking-widest text-accent uppercase">
                A globe of possibilities
              </small>
              <h2 id="map" className="text-3xl font-bold tracking-wide">
                Happy Travelers <br /> the World Over
              </h2>
            </div>
            <p className="text-muted max-w-2xl">
              Don't take our word for it! Thousands of adventurous travelers
              have enjoyed more than 250 exotic locations all over the globe!
            </p>
          </div>
        </section>
        <IntersectComponentFade>
          <section
            className="container grid gap-4 text-center max-w-prose"
            aria-labelledby="cta"
          >
            <div>
              <small className="tracking-widest text-accent uppercase">
                It's Time To Explore
              </small>
              <h2 id="map" className="text-3xl font-bold tracking-wide">
                Get Hidden Locations
              </h2>
            </div>
            <p className="text-muted max-w-2xl">
              Not sure where to start? Drop us a line, and we'll send to you
              locations before they're shown on our website.
            </p>
            <ContactForm />
          </section>
        </IntersectComponentFade>
      </main>
      <footer className="border-t border-accent mt-16 sm:mt-24 lg:mt-40 py-6 sm:py-8 md:py-12">
        <div className="container flex flex-wrap md:justify-between items-center md:items-start gap-12">
          <div className="grid gap-2 grow justify-items-center md:justify-items-start basis-full md:basis-1/4">
            <svg
              aria-label="Traverse Logo"
              width="280"
              viewBox="0 0 357 86"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-32 sm:w-48 lg:w-56"
            >
              <path
                d="M18.555 21.228c-3.033.534-4.35 4.151-2.37 6.51l21.78 25.957c1.98 2.359 5.77 1.69 6.823-1.203l11.59-31.84c1.053-2.894-1.421-5.843-4.454-5.308l-33.37 5.884Z"
                fill="#fff"
              />
              <path
                d="M84.795 63.81c3.032-.534 4.349-4.151 2.37-6.51l-21.78-25.957c-1.98-2.359-5.77-1.69-6.824 1.203L46.972 64.387c-1.053 2.894 1.421 5.842 4.453 5.307l33.37-5.884Z"
                fill="#66CCC1"
              />
              <path
                d="M127.81 64.519v-41.76h9.42v41.76h-9.42Zm-13.26-34.14v-8.22h35.94v8.22h-35.94Zm34.559 34.14v-29.16h9.18v29.16h-9.18Zm9.18-16.02-3.84-3c.76-3.4 2.04-6.04 3.84-7.92 1.8-1.88 4.3-2.82 7.5-2.82 1.4 0 2.62.22 3.66.66 1.08.4 2.02 1.04 2.82 1.92l-5.46 6.9c-.4-.44-.9-.78-1.5-1.02s-1.28-.36-2.04-.36c-1.52 0-2.74.48-3.66 1.44-.88.92-1.32 2.32-1.32 4.2Zm27.785 16.62c-2.68 0-5.08-.66-7.2-1.98-2.08-1.32-3.74-3.12-4.98-5.4-1.2-2.28-1.8-4.88-1.8-7.8s.6-5.52 1.8-7.8c1.24-2.28 2.9-4.08 4.98-5.4 2.12-1.32 4.52-1.98 7.2-1.98 1.96 0 3.72.38 5.28 1.14 1.6.76 2.9 1.82 3.9 3.18 1 1.32 1.56 2.84 1.68 4.56v12.6c-.12 1.72-.68 3.26-1.68 4.62-.96 1.32-2.24 2.36-3.84 3.12-1.6.76-3.38 1.14-5.34 1.14Zm1.86-8.28c1.96 0 3.54-.64 4.74-1.92 1.2-1.32 1.8-2.98 1.8-4.98 0-1.36-.28-2.56-.84-3.6a5.51 5.51 0 0 0-2.28-2.4c-.96-.6-2.08-.9-3.36-.9-1.28 0-2.42.3-3.42.9-.96.56-1.74 1.36-2.34 2.4-.56 1.04-.84 2.24-.84 3.6 0 1.32.28 2.5.84 3.54a6.293 6.293 0 0 0 2.34 2.46c1 .6 2.12.9 3.36.9Zm6.18 7.68v-7.86l1.38-7.08-1.38-7.08v-7.14h9v29.16h-9Zm24.644 0-12.36-29.16h9.9l8.4 24.3h-4.32l8.4-24.3h9.72l-12.36 29.1-7.38.06Zm36.626.66c-3.16 0-5.98-.64-8.46-1.92-2.44-1.32-4.36-3.14-5.76-5.46-1.4-2.32-2.1-4.94-2.1-7.86s.68-5.52 2.04-7.8c1.4-2.32 3.28-4.14 5.64-5.46 2.36-1.32 5.02-1.98 7.98-1.98 2.88 0 5.42.62 7.62 1.86 2.2 1.24 3.92 2.96 5.16 5.16 1.28 2.2 1.92 4.72 1.92 7.56 0 .52-.04 1.08-.12 1.68-.04.56-.14 1.22-.3 1.98l-25.14.06v-6.3l21.24-.06-3.96 2.64c-.04-1.68-.3-3.06-.78-4.14-.48-1.12-1.2-1.96-2.16-2.52-.92-.6-2.06-.9-3.42-.9-1.44 0-2.7.34-3.78 1.02-1.04.64-1.86 1.56-2.46 2.76-.56 1.2-.84 2.66-.84 4.38 0 1.72.3 3.2.9 4.44.64 1.2 1.52 2.14 2.64 2.82 1.16.64 2.52.96 4.08.96 1.44 0 2.74-.24 3.9-.72a8.893 8.893 0 0 0 3.06-2.28l5.04 5.04a13.606 13.606 0 0 1-5.22 3.78c-2.04.84-4.28 1.26-6.72 1.26Zm18.471-.66v-29.16h9.18v29.16h-9.18Zm9.18-16.02-3.84-3c.76-3.4 2.04-6.04 3.84-7.92 1.8-1.88 4.3-2.82 7.5-2.82 1.4 0 2.62.22 3.66.66 1.08.4 2.02 1.04 2.82 1.92l-5.46 6.9c-.4-.44-.9-.78-1.5-1.02s-1.28-.36-2.04-.36c-1.52 0-2.74.48-3.66 1.44-.88.92-1.32 2.32-1.32 4.2Zm26.401 16.74c-1.72 0-3.42-.22-5.1-.66-1.64-.44-3.18-1.06-4.62-1.86-1.4-.84-2.6-1.8-3.6-2.88l5.22-5.28c.96 1.04 2.1 1.86 3.42 2.46 1.32.56 2.76.84 4.32.84 1.08 0 1.9-.16 2.46-.48.6-.32.9-.76.9-1.32 0-.72-.36-1.26-1.08-1.62-.68-.4-1.56-.74-2.64-1.02-1.08-.32-2.22-.66-3.42-1.02-1.2-.36-2.34-.86-3.42-1.5s-1.96-1.52-2.64-2.64c-.68-1.16-1.02-2.62-1.02-4.38 0-1.88.48-3.5 1.44-4.86.96-1.4 2.32-2.5 4.08-3.3 1.76-.8 3.82-1.2 6.18-1.2 2.48 0 4.76.44 6.84 1.32 2.12.84 3.84 2.1 5.16 3.78l-5.22 5.28c-.92-1.08-1.96-1.84-3.12-2.28-1.12-.44-2.22-.66-3.3-.66-1.04 0-1.82.16-2.34.48-.52.28-.78.7-.78 1.26 0 .6.34 1.08 1.02 1.44.68.36 1.56.68 2.64.96 1.08.28 2.22.62 3.42 1.02 1.2.4 2.34.94 3.42 1.62 1.08.68 1.96 1.6 2.64 2.76.68 1.12 1.02 2.6 1.02 4.44 0 2.84-1.08 5.1-3.24 6.78-2.12 1.68-5 2.52-8.64 2.52Zm31.261-.06c-3.16 0-5.98-.64-8.46-1.92-2.44-1.32-4.36-3.14-5.76-5.46-1.4-2.32-2.1-4.94-2.1-7.86s.68-5.52 2.04-7.8c1.4-2.32 3.28-4.14 5.64-5.46 2.36-1.32 5.02-1.98 7.98-1.98 2.88 0 5.42.62 7.62 1.86 2.2 1.24 3.92 2.96 5.16 5.16 1.28 2.2 1.92 4.72 1.92 7.56 0 .52-.04 1.08-.12 1.68-.04.56-.14 1.22-.3 1.98l-25.14.06v-6.3l21.24-.06-3.96 2.64c-.04-1.68-.3-3.06-.78-4.14-.48-1.12-1.2-1.96-2.16-2.52-.92-.6-2.06-.9-3.42-.9-1.44 0-2.7.34-3.78 1.02-1.04.64-1.86 1.56-2.46 2.76-.56 1.2-.84 2.66-.84 4.38 0 1.72.3 3.2.9 4.44.64 1.2 1.52 2.14 2.64 2.82 1.16.64 2.52.96 4.08.96 1.44 0 2.74-.24 3.9-.72a8.893 8.893 0 0 0 3.06-2.28l5.04 5.04a13.606 13.606 0 0 1-5.22 3.78c-2.04.84-4.28 1.26-6.72 1.26Z"
                fill="#fff"
              />
            </svg>
            <p className="text-muted text-sm text-center md:text-left">
              We curate unique experiences
              <br />
              for the adventurous travelers.
            </p>
          </div>
          <nav
            aria-label="Secondary navigation"
            className="text-sm flex flex-col items-center sm:items-start sm:flex-row text-center sm:text-left gap-6 justify-between md:justify-around grow basis-full md:basis-1/2 mt-2"
          >
            <div className="grid sm:grid-cols-3 gap-3 w-full text-center md:text-left">
              <div>
                <p className="font-bold underline decoration-accent decoration-2 underline-offset-4 tracking-wide">
                  About
                </p>
                <ul aria-label="About Traverse">
                  <li>
                    <a
                      href="#"
                      className="hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent rounded-full"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent rounded-full"
                    >
                      Press
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent rounded-full"
                    >
                      News
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold underline decoration-accent decoration-2 underline-offset-4 tracking-wide">
                  Locations
                </p>
                <ul aria-label="About Locations">
                  <li>
                    <a
                      href="#"
                      className="hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent rounded-full"
                    >
                      South America
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent rounded-full"
                    >
                      North America
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent rounded-full"
                    >
                      Africa
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-bold underline decoration-accent decoration-2 underline-offset-4 tracking-wide">
                  Contact Us
                </p>
                <ul aria-label="About Contact">
                  <li>
                    <a
                      href="#"
                      className="hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent rounded-full"
                    >
                      Email
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent rounded-full"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-accent transition-colors focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent rounded-full"
                    >
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
