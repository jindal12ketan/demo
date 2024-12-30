// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import styles from './Carousel.module.css';

// type CTAButton = {
//   label: string;
//   url: string;
// };

// type Slide = {
//   backgroundImage: string;
//   textContent: string; // Rich text content as HTML string
//   ctaButtonPrimary?: CTAButton;
//   ctaButtonSecondary?: CTAButton;
// };

// interface CarouselProps {
//   slides: Slide[];
//   autoPlayInterval?: number;
// }

// const Carousel: React.FC<CarouselProps> = ({
//   slides = [],
//   autoPlayInterval = 5000,
// }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [prevIndex, setPrevIndex] = useState(0);
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);

//   const slideCount = slides.length;

//   useEffect(() => {
//     if (slideCount <= 1) return;
//     intervalRef.current = setInterval(() => {
//       handleNext();
//     }, autoPlayInterval);

//     return () => {
//       if (intervalRef.current) clearInterval(intervalRef.current);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [activeIndex, slideCount, autoPlayInterval]);

//   const handleNext = () => {
//     setPrevIndex(activeIndex);
//     setActiveIndex((prevIndex) =>
//       prevIndex === slideCount - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const handleDotClick = (index: number) => {
//     setPrevIndex(activeIndex);
//     setActiveIndex(index);
//     if (intervalRef.current) clearInterval(intervalRef.current);
//   };

//   if (slideCount === 0) {
//     return <div>No slides available.</div>;
//   }

//   const currentSlide = slides[activeIndex];
//   const isForward =
//     (activeIndex > prevIndex && !(prevIndex === slideCount - 1 && activeIndex === 0)) ||
//     (activeIndex === 0 && prevIndex !== slideCount - 1);

//   return (
//     <div className={styles.CarouselContainer}>
//       {/* Background Image and Overlay */}
//       {currentSlide?.backgroundImage && (
//         <div className={styles.backgroundImageWrapper}>
//           <Image
//             src={currentSlide.backgroundImage}
//             alt="Slide Background"
//             fill
//             className={styles.backgroundImage}
//             priority
//           />
//           <div className={styles.overlay}></div>
//         </div>
//       )}

//       <div
//         key={activeIndex}
//         className={`${styles.contentContainer} ${isForward ? styles.slideInRight : styles.slideInLeft
//           }`}
//       >
//         {currentSlide.textContent && (
//           <div
//             className={`${styles.textContent} ${styles.builderContent}`}
//             dangerouslySetInnerHTML={{ __html: currentSlide.textContent }}
//           />
//         )}

//         <div className={styles.ctaButtons}>
//           {currentSlide.ctaButtonPrimary && (
//             <a
//               href={currentSlide.ctaButtonPrimary.url}
//               className={styles.ctaButtonPrimary}
//             >
//               {currentSlide.ctaButtonPrimary.label}
//             </a>
//           )}
//           {currentSlide.ctaButtonSecondary && (
//             <a
//               href={currentSlide.ctaButtonSecondary.url}
//               className={styles.ctaButtonSecondary}
//             >
//               {currentSlide.ctaButtonSecondary.label}
//             </a>
//           )}
//         </div>
//       </div>
//       {slideCount > 1 && (
//         <div className={styles.navDotsContainer}>
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => handleDotClick(index)}
//               className={
//                 index === activeIndex
//                   ? `${styles.navDot} ${styles.navDotActive}`
//                   : styles.navDot
//               }
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Carousel;




import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Carousel.module.css';
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type CTAButton = {
  label: string;
  url: string;
};

type Slide = {
  backgroundImage: string;
  textContent: string; // Rich text content as HTML string
  ctaButtonPrimary?: CTAButton;
  ctaButtonSecondary?: CTAButton;
};

interface CarouselProps {
  slides: Slide[];
  autoPlayInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  slides = [],
  autoPlayInterval = 5000,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slideCount = slides.length;

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  if (slideCount === 0) {
    return <div>No slides available.</div>;
  }

  const currentSlide = slides[activeIndex];

  const createCarouselContent = (slide: Slide, index: number) => {
    return (
      <div key={index} className={`${styles.contentContainer}`}>
        {slide.textContent && (
          <div
            className={`${styles.textContent} ${styles.builderContent}`}
            dangerouslySetInnerHTML={{ __html: slide.textContent }}
          />
        )}
        <div className={styles.ctaButtons}>
          {slide.ctaButtonPrimary && (
            <a href={slide.ctaButtonPrimary.url} className={styles.ctaButtonPrimary}>
              {slide.ctaButtonPrimary.label}
            </a>
          )}
          {slide.ctaButtonSecondary && (
            <a href={slide.ctaButtonSecondary.url} className={styles.ctaButtonSecondary} >
              {slide.ctaButtonSecondary.label}
            </a>
          )}
        </div>
      </div>
    );
  };
  return (
    <div className={styles.CarouselContainer}>
      {/* Background Image and Overlay */}
      {currentSlide?.backgroundImage && (
        <div className={styles.backgroundImageWrapper}>
          <Image
            src={currentSlide.backgroundImage}
            alt="Slide Background"
            fill
            className={styles.backgroundImage}
            priority
          />
          <div className={styles.overlay}></div>
        </div>
      )}

      <div className={`${styles.carouselContainer}`}>
        <ReactCarousel
          swipeable={true}
          emulateTouch={true}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          showArrows={false}
          swipeScrollTolerance={50}
          autoPlay={true}
          interval={autoPlayInterval}
          selectedItem={activeIndex}
          onChange={handleDotClick}
        >
          {slides.map((slide, index) =>
            createCarouselContent(slide, index)
          )}
        </ReactCarousel>
      </div>
      {slideCount > 1 && (
        <div className={styles.navDotsContainer}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={
                index === activeIndex
                  ? `${styles.navDot} ${styles.navDotActive}`
                  : styles.navDot
              }
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
