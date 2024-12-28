import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './ContentAndImageCarousel.module.css';

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
	headerContent = '',
	contents = [],
	backgroundImage = '',
	ctaButton = {},
}) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [prevIndex, setPrevIndex] = useState(0);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	const slideCount = Math.ceil(contents.length / 3);


	const handleDotClick = (index: number) => {
		setPrevIndex(activeIndex);
		setActiveIndex(index);
		if (intervalRef.current) clearInterval(intervalRef.current);
	};

	if (slideCount === 0) {
		return <div>No slides available.</div>;
	}
	const listCount = 3;
	const listItems = contents.slice(activeIndex * listCount, (activeIndex + 1) * listCount);

	const isForward =
		(activeIndex > prevIndex) ||
		(activeIndex === 0 && prevIndex === slideCount - 1);

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
				<div className={styles.headerContent}
					dangerouslySetInnerHTML={{ __html: headerContent }}
				/>
				<div
					key={activeIndex}
					className={`${styles.contentContainer} ${isForward ? styles.slideInRight : styles.slideInLeft
						}`}
				>
					{listItems.length > 0 && (
						listItems.map((item, index) => (
							<div key={`${activeIndex}-${index}`} className={styles.textContentContainer}>
								<div className={styles.iconAndText}>
									<span className={styles.checkIcon}>✔</span> {/* Adjust icon styling */}
									<div
										className={styles.textContent}
										dangerouslySetInnerHTML={{ __html: item.textContent }}
									/>
								</div>
								<div className={styles.divider}></div>
							</div>
						))
					)}
				</div>
				<div className={styles.navButtonContainer}>
					{ctaButton && (
						<div className={styles.ctaButtonWrapper}>
							<span className={styles.ctaButton}>
								<a href={ctaButton.url}>
									{ctaButton.label}
								</a>
							</span>
						</div>
					)}
					{slideCount > 1 && (
						<div className={styles.navDotsContainer}>
							{Array.from({ length: slideCount }, (_, index) => index + 1).map((_, index) => (
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
			</div>

		</div>
	);
};

export default ContentAndImageCarousel;
