import React from 'react'
import { selectCartProducts, selectCartTotal } from '../../../data/slices/cart';
import { useAppSelector } from '../../../data/store';
import './style.css'

const OrderShop = ():React.ReactElement=>{
    const cartProducts = useAppSelector(selectCartProducts);
    const orderTotal = useAppSelector(selectCartTotal);

    // Группируем блюда по ресторанам
    const groupedByRestaurant = cartProducts.reduce((acc, item) => {
        if (!acc[item.restoran]) {
            acc[item.restoran] = [];
        }
        acc[item.restoran].push(item);
        return acc;
    }, {} as Record<string, typeof cartProducts>);

    return(
        <>
        <div className="order-summary-wrapper">
          <div className="order-summary">
            <div className="order-summary-title">Your order</div>
            <div className="order-summary-list">
              {Object.entries(groupedByRestaurant).map(([restaurant, items]) => (
                <div key={restaurant} className="restaurant-group">
                  <div className="restaurant-title">{restaurant}</div>
                  {items.map((item, idx) => (
                    <div className="order-summary-item" key={idx}>
                      <span className="order-summary-qty">{item.quantity}</span>
                      <span className="order-summary-name">{item.title}</span>
                      <span className="order-summary-price">€ {(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="order-summary-total-row">
              <span>Total</span>
              <span className="order-summary-total">€ {orderTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
        </>
    )
}

export default OrderShop;