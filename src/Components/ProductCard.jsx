import BigImage1 from "../assets/image-product-1.jpg";
import BigImage2 from "../assets/image-product-2.jpg";
import BigImage3 from "../assets/image-product-3.jpg";
import BigImage4 from "../assets/image-product-4.jpg";
import Minus from "../assets/icon-minus.svg";
import Plus from "../assets/icon-plus.svg";
import Cart from "../assets/icon-cart.svg";
import PreviousBtn from "../assets/icon-previous.svg";
import NextBtn from "../assets/icon-next.svg";

function ProductCard({
  quantity,
  incrementQuantity,
  decrementQuantity,
  addToCart,
  setIsOverlayOpen,
  currentIndex,
  setCurrentIndex,
}) {
  const images = [BigImage1, BigImage2, BigImage3, BigImage4];
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="ProductCard-container">
      <div className="product-img">
        <div className="img-product1" tabIndex={0}>
          <img
            src={images[currentIndex]}
            alt={`Sneaker ${currentIndex + 1}`}
            onClick={() => {
              setIsOverlayOpen(true);
              setCurrentIndex(0);
            }}
          />
        </div>
        <div className="previous-btn" tabIndex={0} onClick={handlePrev}>
          <img src={PreviousBtn} alt="Previous Button" />
        </div>

        <div className="next-btn" tabIndex={0} onClick={handleNext}>
          <img src={NextBtn} alt="Next Button" />
        </div>
        <div className="other-images">
          {images.map((image, index) => (
            <div className="thumb">
              <img
                src={image}
                alt={`Sneaker ${index + 1}`}
                tabIndex={0}
                onClick={() => setCurrentIndex(index)}
                className={index === currentIndex ? "active" : ""}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="product-details">
        <div className="product-name">
          <p>SNEAKER COMPANY</p>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div className="price-container-span">
            <div className="price-container">
              <span className="price">$125.00</span>
              <div className="discount-container">
                <span className="discount">50%</span>
              </div>
            </div>
            <span className="old-price">$250.00</span>
          </div>
          <div className="btn-container">
            <div className="quantity-container">
              <img
                src={Minus}
                alt="Minus"
                className="minus"
                onClick={decrementQuantity}
              />
              <span className="quantity">{quantity}</span>
              <img
                src={Plus}
                alt="Plus"
                className="plus"
                onClick={incrementQuantity}
              />
            </div>
            <div className="cart-btn">
              <button onClick={addToCart}>
                <img src={Cart} alt="Cart Icon" className="cart-icon-btn" />
                <span>Add to cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
