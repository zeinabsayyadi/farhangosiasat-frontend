import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import styles from "../../styles/Embla.module.css";
import { Children, useEffect } from "react";
const EmblaCarousel = ({ children }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, axis: "x" }, [
    Autoplay(),
  ]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <div
      className={styles.embla}
      ref={emblaRef}
    >
      <div className={styles.embla__container}>
        {Children.map(children, (child) => (
          <div
            key={child?.id}
            className={`${styles.embla__slide} ${styles.first}`}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
