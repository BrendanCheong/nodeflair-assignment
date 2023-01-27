// lib
import { Fragment } from "react";

// types
import { type NavigationProps } from "@interfaces/jobs/Navigation";

// components
import NavButton from "@components/jobs/NavButton";

const Navigation = ({
  onSelect,
  currentPage,
  maxPages,
}: NavigationProps): JSX.Element => {
  return (
    <Fragment>
      <nav className="flex flex-col items-center justify-center p-3">
        <p className="space-x-1 text-center font-sans">
          <span className="font-normal">Page</span>
          <b className="font-bold">{currentPage + 1}</b>
          <span className="font-normal">of</span>
          <b className="font-bold">{maxPages}</b>
        </p>
        <section className="rounded-2xl">
          <ul className="flex h-full w-full flex-row justify-center text-center font-normal text-primary">
            {(currentPage === maxPages - 1 ||
              (currentPage < maxPages - 1 && currentPage > 0)) && (
                <Fragment>
                  <li className="cursor-pointer">
                    <button
                      className="h-8 w-8 rounded-l-md border-[1px] border-stone-300 bg-white transition duration-300 hover:bg-light-gray"
                      onClick={() => onSelect(currentPage - 1)}
                      disabled={currentPage === 0}
                    >
                      ⟨
                    </button>
                  </li>
                  <li className="cursor-pointer">
                    <button
                      className="h-8 w-8 border-[1px] border-stone-300 bg-white transition duration-300 hover:bg-light-gray"
                      onClick={() => onSelect(0)}
                    >
                      «
                    </button>
                  </li>
                </Fragment>
              )}
            {Array.from({ length: maxPages }, (_, index) => (
              <NavButton
                onSelect={(i) => onSelect(i)}
                currentValue={index + 1}
                key={index}
                selected={index === currentPage}
              />
            ))}
            {(currentPage === 0 ||
              (currentPage < maxPages - 1 && currentPage > 0)) && (
                <Fragment>
                  <li className="cursor-pointer">
                    <button
                      className="h-8 w-8 border-[1px] border-stone-300 bg-white transition duration-300 hover:bg-light-gray"
                      onClick={() => onSelect(maxPages - 1)}
                    >
                      »
                    </button>
                  </li>
                  <li className="cursor-pointer">
                    <button
                      className="h-8 w-8 rounded-r-md border-[1px] border-stone-300 bg-white transition duration-300 hover:bg-light-gray"
                      onClick={() => onSelect(currentPage + 1)}
                      disabled={currentPage === maxPages - 1}
                    >
                      ⟩
                    </button>
                  </li>
                </Fragment>
              )}
          </ul>
        </section>
      </nav>
    </Fragment>
  );
};

export default Navigation;
