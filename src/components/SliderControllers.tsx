import { FC, useEffect, useState } from "react";

const SliderControllers: FC<{ slidersLength: number }> = ({
  slidersLength,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleSlideBtnClick = (e: Event) => {
      (e?.currentTarget as Element).id === "prev"
        ? setCurrentIndex(currentIndex - 1)
        : setCurrentIndex(currentIndex + 1);
    };

    window.dispatchEvent(
      new CustomEvent("SliderMove", {
        detail: { currentIndex: currentIndex },
      })
    );

    const slideBtns = document.querySelectorAll("[data-slide-btn]");
    slideBtns.forEach((btn) => {
      btn.addEventListener("click", handleSlideBtnClick);
    });

    return () => {
      slideBtns.forEach((btn) =>
        btn.removeEventListener("click", handleSlideBtnClick)
      );
    };
  }, [currentIndex]);

  return (
    <div className="flex space-x-4">
      <button
        data-slide-btn
        id="prev"
        aria-label="show previous image"
        className="grid place-items-center bg-accent hover:bg-accent/90 rounded-full p-2 text-bkg focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent disabled:bg-accent/20 disabled:text-accent"
        disabled={currentIndex == 0 ? true : false}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 pointer-events-none"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
      <button
        data-slide-btn
        id="next"
        aria-label="show next image"
        className="grid place-items-center bg-accent hover:bg-accent/90 rounded-full p-2 text-bkg focus:outline-none focus-visible:ring-4 ring-offset-2 ring-offset-bkg ring-accent disabled:bg-accent/20 disabled:text-accent"
        disabled={currentIndex == slidersLength - 1 ? true : false}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 pointer-events-none"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default SliderControllers;
