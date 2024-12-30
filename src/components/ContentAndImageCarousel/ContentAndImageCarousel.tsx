import React, { useState, useRef } from "react";
import styles from "./ContentAndImageCarousel.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type CTAButton = {
	label: string;
	url: string;
};

type Content = {
	textContent: string; // Rich text content as HTML string
};

interface ContentAndImageCarouselProps {
	headerContent: string; // Rich text content as HTML string
	contents: Content[];
	backgroundImage: string;
	ctaButton?: CTAButton;
}

const ContentAndImageCarousel: React.FC<ContentAndImageCarouselProps> = ({
	headerContent = "",
	contents = [],
	backgroundImage = "",
	ctaButton = {},
}) => {
	const listCount = 3;
	const [activeIndex, setActiveIndex] = useState(0);

	const slideCount = Math.ceil(contents.length / listCount);

	if (slideCount === 0) {
		return <div>No slides available.</div>;
	}

	const createCarouselContent = (index: number) => {
		const listItems = contents.slice(
			index * listCount,
			(index + 1) * listCount
		);
		return (
			<div key={index} className={`${styles.contentContainer}`}>
				{listItems.length > 0 &&
					listItems.map((item, index) => (
						<div
							key={`${activeIndex}-${index}`}
							className={styles.textContentContainer}
						>
							<div className={styles.iconAndText}>
								<span className={styles.checkIcon}>✔</span>
								<div
									className={styles.textContent}
									dangerouslySetInnerHTML={{ __html: item.textContent }}
								/>
							</div>
							<div className={styles.divider}></div>
						</div>
					))}
			</div>
		);
	};

	const contentArray = Array.from(
		{ length: slideCount },
		(_, index) => index
	).map(createCarouselContent);

	const updateCurrentSlide = (index: number) => {
		if (index !== activeIndex) {
			setActiveIndex(index);
		}
	};

	return (
		<div className={styles.ContentAndImageCarouselContainer}>
			{backgroundImage && (
				<div className={styles.imageWrapper}>
					<img
						src={backgroundImage}
						alt="Background Image"
						className={styles.backgroundImage}
					/>
				</div>
			)}
			<div className={styles.carouselContainer}>
				<div
					className={styles.headerContent}
					dangerouslySetInnerHTML={{ __html: headerContent }}
				/>
				<Carousel
					emulateTouch={true}
					swipeable={true}
					showThumbs={false}
					showIndicators={false}
					showStatus={false}
					showArrows={false}
					swipeScrollTolerance={50}
					selectedItem={activeIndex}
					onChange={updateCurrentSlide}
				>
					{contentArray}
				</Carousel>
				{ctaButton && (
					<div className={styles.ctaButtonWrapper}>
						<span className={styles.ctaButton}>
							<a href={ctaButton?.url}>{ctaButton?.label}</a>
						</span>
					</div>
				)}
				{slideCount > 1 && (
					<div className={styles.navDotsContainer}>
						{contentArray.map((_, index: number) => (
							<button
								key={index}
								onClick={() => updateCurrentSlide(index)}
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
		</div>
	);
};

export default ContentAndImageCarousel;
