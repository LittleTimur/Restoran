import React, { useEffect } from 'react';
import Header from '../../../widgets/header';
import './style.css';
import '../order/style.css'
import OrderShop from '../order-shop';
import { useAppDispatch } from '../../../data/store';
import { clearCart } from '../../../data/slices/cart';


const Order3 = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearCart());
    };
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="order-banner order3-banner">
        <div className="order-banner-title">Order confirmed!</div>
      </div>
      <div className="order-main">
        <div className='order-main-title'>
            <div className='delivery'>Estimated delivery</div>
            <div className='delivery-time'>13:23 today</div>
        </div>
        <OrderShop/>
      </div>
      <img className="OrderLedies" src="/img/OrderLedies.svg" alt="" />
    </>
  );
};

export default Order3;