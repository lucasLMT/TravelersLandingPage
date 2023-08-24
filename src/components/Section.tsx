import { FC, ReactNode } from "react";

interface MySection {
  smallText: string;
  title: string;
  children: ReactNode;
}

const Section: FC<MySection> = ({ smallText, title, children }) => {
  return (
    <section
      aria-labelledby="headline"
      className="container grid gap-4 text-center max-w-prose"
    >
      <div>
        <small className="tracking-widest text-accent uppercase drop-shadow-text-sm">
          {smallText}
        </small>
        <h2
          id="headline"
          className="text-3xl font-bold tracking-wide drop-shadow-text-md"
        >
          {title}
        </h2>
      </div>
      <p>{children}</p>
    </section>
  );
};

export default Section;
