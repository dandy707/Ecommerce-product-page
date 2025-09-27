import Logo from "../assets/logo.svg";
import Cart from "../assets/icon-cart.svg";
import Avatar from "../assets/image-avatar.png";
import DeleteIcon from "../assets/icon-delete.svg";
import Thumbnail from "../assets/image-product-1-thumbnail.jpg";
import IconMenu from "../assets/icon-menu.svg";
import IconClose from "../assets/icon-close.svg";

function NavBar({
  menuOpen,
  toggleMenu,
  cartCount,
  cartItems,
  handleDelete,
  toggleCart,
  isCartOpen,
}) {
  return (
    <div className="NavBar-container">
      <div className="nav-links" onClick={toggleMenu}>
        <img src={IconMenu} alt="Icon Menu" className="icon-menu" />

        {/*Overlay Mobile Menu */}
        {menuOpen && (
          <div className="icon-mobile-menu">
            <div className="icon-close" onClick={toggleMenu} tabIndex={0}>
              <img src={IconClose} alt="Icon Close" />
            </div>
            <ul className="mobile-menu">
              <li className="mobile-menu-item">
                <a href="#">Collections</a>
              </li>
              <li className="mobile-menu-item">
                <a href="#">Men</a>
              </li>
              <li className="mobile-menu-item">
                <a href="#">Women</a>
              </li>
              <li className="mobile-menu-item">
                <a href="#">About</a>
              </li>
              <li className="mobile-menu-item">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        )}
        {/* Logo */}
        <img src={Logo} alt="Nav Logo" className="logo" />
        <ul>
          <li>
            <a href="#">Collections</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="nav-cart">
        <div className="cart-container" onClick={toggleCart}>
          <img src={Cart} alt="Cart" className="cart" />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </div>
        {/*Dropdown cart Box */}
        {isCartOpen &&
          (cartCount === 0 ? (
            <div className="empty-cart">
              <h2>Cart</h2>
              <hr />
              <p>Your cart is empty.</p>
            </div>
          ) : (
            <div className="ordered-items">
              <h2>Cart</h2>
              <hr />
              <div className="item-ordered-container">
                <div className="item-container">
                  <img
                    src={Thumbnail}
                    alt="Image Product Thumbnails"
                    className="thumbnail-img"
                  />
                  <div className="item-details">
                    <p className="item-name">{cartItems?.name}</p>
                    <div className="item-price-quantity-total">
                      <span className="item-price">
                        ${cartItems?.price.toFixed(2)}
                      </span>
                      <span className="item-quantity">x {cartItems?.qty}</span>
                      <span className="item-total">
                        ${cartItems?.total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="delete" onClick={handleDelete}>
                  <img
                    src={DeleteIcon}
                    alt="Icon Delete"
                    className="delete-icon"
                  />
                </div>
              </div>
              <div className="checkout-container">
                <button className="checkout-btn">Checkout</button>
              </div>
            </div>
          ))}

        {/* Avatar Image */}
        <img src={Avatar} alt="Avatar" className="avatar-img" tabIndex={0} />
      </div>
    </div>
  );
}
export default NavBar;
