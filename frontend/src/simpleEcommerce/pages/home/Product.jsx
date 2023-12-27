import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
export const Product = ({ product }) => {
  const { id, productName, price, productImage } = product;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <div>
      <div className='product'>
        <img src={productImage} alt={productName} />
        <div className='description'>
          <p>
            <b>{productName}</b>
          </p>
          <p>
            <b>${price}</b>
          </p>
        </div>
        <button className='addToCartBttn' onClick={() => addToCart(id)}>
          Add To Cart {cartItemAmount > 0 && <>({cartItemAmount} )</>}
        </button>
      </div>
    </div>
  );
};
