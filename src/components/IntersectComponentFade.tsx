import { FC, ReactNode, useRef, useEffect } from "react";

interface IntersectElements {
  children: ReactNode;
}

const IntersectComponentFade: FC<IntersectElements> = ({ children }) => {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          targetRef.current?.classList.add("faded");
          observer.unobserve(entry.target);
          targetRef.current?.classList.remove("fade-up");
        }
      },
      {
        threshold: 0.6,
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  });

  return (
    <div ref={targetRef} className="fade-up">
      {children}
    </div>
  );
};

export default IntersectComponentFade;
