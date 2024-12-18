import React, { useEffect } from "react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";

import "../Styles/embla.css";
import { Link } from "react-router-dom";

const EmblaCarousel = (props) => {
  const { slides } = props;
  const options = { loop: true }; // Enable looping
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  // Autoplay logic
  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = () => {
      emblaApi.scrollNext();
    };

    const autoplayInterval = setInterval(autoplay, 3000); // Adjust the interval as needed

    return () => clearInterval(autoplayInterval); // Cleanup on unmount
  }, [emblaApi]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((item, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <h2>{item.name}</h2>
                <img src={item.imageUrl} alt={item.name} className="embla__slide__image"/>
                <Link
                  to={`/product/${item.name}`}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontWeight: "bold",
                    backgroundColor: "white",
                    padding: "10px 20px",
                    borderRadius: "5px",
                  }}
                >
                  View Product
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
