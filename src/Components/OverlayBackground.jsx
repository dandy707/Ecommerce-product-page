import CloseBtn from "../assets/icon-close.svg";
import PreviousBtn from "../assets/icon-previous.svg";
import NextBtn from "../assets/icon-next.svg";
import Image1 from "../assets/image-product-1.jpg";
import Image2 from "../assets/image-product-2.jpg";
import Image3 from "../assets/image-product-3.jpg";
import Image4 from "../assets/image-product-4.jpg";
import Thumb1 from "../assets/image-product-1-thumbnail.jpg";
import Thumb2 from "../assets/image-product-2-thumbnail.jpg";
import Thumb3 from "../assets/image-product-3-thumbnail.jpg";
import Thumb4 from "../assets/image-product-4-thumbnail.jpg";

function OverlayBackground({
  isOverlayOpen,
  currentIndex,
  setCurrentIndex,
  closeOverlay,
}) {
  if (!isOverlayOpen) return null;

  // Big product images
  const images = [Image1, Image2, Image3, Image4];

  // Thumbnail images
  const thumbnails = [Thumb1, Thumb2, Thumb3, Thumb4];

  // Handlers
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="overlay">
      <div className="overlay-content">
        {/* Big Image With Navigation */}
        <div className="overlay-main-img">
          {/* Close Button */}
          <div className="close-btn" onClick={closeOverlay} tabIndex={0}>
            <img src={CloseBtn} alt="Close Button" className="close-btn-img" />
          </div>

          {/* Previous Button */}
          <div className="image-previous" tabIndex={0} onClick={handlePrev}>
            <img
              src={PreviousBtn}
              alt="Previous Button"
              className="previous-btn-img"
            />
          </div>

          {/* Big Image */}
          <img
            src={images[currentIndex]}
            alt={`Product ${currentIndex + 1}`}
            className="big-img"
          />

          {/* Next Button */}
          <div className="image-next" tabIndex={0} onClick={handleNext}>
            <img src={NextBtn} alt="Next Button" className="next-btn-img" />
          </div>
        </div>

        {/* Thumbnails */}
        <div className="overlay-thumbnails">
          {thumbnails.map((thumb, index) => (
            <div
              key={index}
              className={`thumb-overlay-img ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <img
                src={thumb}
                alt={`Thumbnail ${index + 1}`}
                className="thumbnail-img"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OverlayBackground;
