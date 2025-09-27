import { useState } from "react";
import NavBar from "./Components/NavBar";
import ProductCard from "./Components/ProductCard";
import OverlayBackground from "./Components/OverlayBackground";
import BigImage1 from "./assets/image-product-1.jpg";

function App() {
  // Cart dropdown toggle
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  // Cart items
  const [cartItems, setCartItems] = useState(null);
  const cartCount = cartItems ? cartItems.qty : 0;

  // Quantity for ProductCard
  const [quantity, setQuantity] = useState(1);
  const incrementQuantity = () => setQuantity((q) => q + 1);
  const decrementQuantity = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  // Price per item
  const price = 125;

  // Add to Cart
  const addToCart = () => {
    setCartItems({
      name: "Fall Limited Edition Sneakers",
      price,
      qty: quantity,
      total: price * quantity,
    });
    setQuantity(1);
  };

  // Handle delete from cart
  const handleDelete = () => {
    if (!cartItems) return;

    if (cartItems.qty > 1) {
      setCartItems({
        ...cartItems,
        qty: cartItems.qty - 1,
        total: (cartItems.qty - 1) * cartItems.price,
      });
    } else {
      setCartItems(null);
    }
  };

  // Mobile menu state
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Overlay state
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="App-container">
      <NavBar
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
        cartCount={cartCount}
        cartItems={cartItems}
        handleDelete={handleDelete}
        toggleCart={toggleCart}
        isCartOpen={isCartOpen}
      />
      <ProductCard
        quantity={quantity}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        addToCart={addToCart}
        setIsOverlayOpen={setIsOverlayOpen}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      <OverlayBackground
        isOverlayOpen={isOverlayOpen}
        setCurrentIndex={setCurrentIndex}
        currentIndex={currentIndex}
        closeOverlay={() => setIsOverlayOpen(false)}
      />
    </div>
  );
}

export default App;
