import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, ListGroup, Image, From, Button, Card } from "react-bootstrap";
import Message from "../components/Message";
import { addToCart } from "../actions/cartActions";

const CartPage = ({ match, location, history }) => {
  const productId = match.params.id;
  //---== Getting the number of quantity, right char from the path '?qty=1'---==\\
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  //--== putting the item into the cart ==--\\
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  //---== dispatching addToCart only if there is a productId ---==\\
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return <div>Cart</div>;
};

export default CartPage;
