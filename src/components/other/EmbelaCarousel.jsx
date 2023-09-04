import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import style from "@/styles/Embla.module.css";
import {
  ButtonBase,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Autoplay from "embla-carousel-autoplay";
const EmblaCarousel = (props) => {
  const { slides } = props;
  const options = { direction: "rtl", loop: true };
  const contentfulImageLoader = ({ src, width }) => {
    return `${src}?w=${width}`;
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onButtonClick = useCallback((emblaApi) => {
    const { autoplay } = emblaApi.plugins();
    if (!autoplay) return;
    if (autoplay.options.stopOnInteraction !== false) autoplay.stop();
  }, []);
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onButtonClick
  );
  return (
    <div className={style[`embla`]}>
      <div
        className={style[`embla__viewport`]}
        ref={emblaRef}
      >
        <div className={style[`embla__container`]}>
          {slides.map((slide, index) => (
            <div
              className={style[`embla__slide`]}
              key={index}
            >
              <Card
                key={slide?.id}
                className={style[`embla__slide__img`]}
              >
                <CardMedia sx={{ width: "100vw", height: "100vh" }}>
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      width: "100%",
                      height: "100%",
                      overflow: "hidden",
                      maxHeight: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      loader={contentfulImageLoader}
                      alt={slide?.title}
                      src={slide?.imageurl}
                      //src="/images.jfif"
                      sizes="(max-width: 768px) 100vw"
                      fill
                      priority
                    />
                    <div
                      style={{
                        position: "absolute",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <CardContent>
                        <ButtonBase>
                          <Typography
                            gutterBottom
                            variant="h3"
                            component="div"
                            sx={{
                              color: "white",
                            }}
                          >
                            {slide?.title}
                          </Typography>
                        </ButtonBase>
                      </CardContent>
                    </div>
                  </div>
                </CardMedia>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className={style[`embla__dots`]}>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={style["embla__dot"]}
          />
        ))}
      </div>
    </div>
  );
};

export default EmblaCarousel;
