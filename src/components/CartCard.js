import { useDispatch } from "react-redux";
import { useTitle } from "../hooks/useTitle";
import { remove } from "../store/cartSlice";

import "./CartCard.css";

export const CartCard = ({ product }) => {
  const dispatch = useDispatch();
  useTitle('Cart');

  const {name, price, image} = product;

  return (
      <div className="cartCard">
        <img src={image} alt={name} />
        <p className="productName">{name}</p>
        <p className="productPrice">${price}</p>
      <button onClick={() => dispatch(remove(product))}> Remove</button>
      </div>
  )
}
