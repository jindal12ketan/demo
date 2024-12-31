import styles from "./InteractiveHoverImageList.module.css";
import { useState } from "react";

type CTAButton = {
  label: string;
  url: string;
};

type Tile = {
  image: string;
  title: string;
  svgIcon: string;
  ctaButton?: CTAButton;
};

interface InteractiveHoverImageListProps {
  headerContent: string; // Rich text content as HTML string
  description: string;
  tiles: Tile[];
}

const InteractiveHoverImageList: React.FC<InteractiveHoverImageListProps> = ({
  headerContent = "",
  description = "",
  tiles = [],
}) => {
  const [activeTileIndex, setActiveTileIndex] = useState(0);

  const tileCount = tiles.length;

  if (tileCount === 0) {
    return <div>No tiles available.</div>;
  }

  return (
    <div className={styles.InteractiveHoverImageListContainer}>
      <div className={styles.listContainer}>
        <div
          className={styles.headerContent}
          dangerouslySetInnerHTML={{ __html: headerContent }}
        />
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className={styles.solutions}>
          {tiles.map((tile, index) => {
            return (
              <a key={index} className={styles.tile} href={tile.ctaButton?.url} onMouseEnter={() => setActiveTileIndex(tileCount - tiles.length + tiles.indexOf(tile))}>
                <img src={tile.svgIcon} alt={`${tile.title} icon`} className={styles.icon} />
                <div className={styles.textWrapper}>
                  <p className={styles.heading}>{tile.title}</p>
                  <p className={styles.more}>Learn more</p>
                </div>
              </a>
            )
          })}
        </div>
      </div>


      {tiles[activeTileIndex].image && (
        <div className={styles.imageWrapper}>
          <img
            src={tiles[activeTileIndex].image}
            alt="Background Image"
            className={styles.backgroundImage}
          />
        </div>
      )}
    </div>
  );
};

export default InteractiveHoverImageList;
