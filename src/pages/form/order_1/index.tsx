import React, { useState } from 'react';
import Header from '../../../widgets/header';
import './style.css';
import { useAppSelector } from '../../../data/store';
import { selectCartProducts, selectCartTotal } from '../../../data/slices/cart';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const Order1 = (): React.ReactElement => {
    const cartProducts = useAppSelector(selectCartProducts)
    const orderTotal = useAppSelector(selectCartTotal)
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // переход к следующему шагу или отправка данных
    alert('Next step!');
  };

  return (
    <>
      <Header />
      <div className="order1-banner">
        <div className="order1-banner-title">Your order at restaurant.name</div>
      </div>
      <div className="order1-main-row">
        <div className="order1-form-wrapper">
          <form onSubmit={handleSubmit} className="order1-form">
            <div className="order1-form-header-row">
              <div className="order1-form-title">Contact details</div>
              <div className="order1-form-step">Step 1 of 3</div>
            </div>
            <div className="order1-form-underline" />
            <div className="order1-form-row">
              <div className="order1-form-group">
                <label htmlFor="firstName">First name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Mando"
                  required
                />
              </div>
              <div className="order1-form-group">
                <label htmlFor="lastName">Last name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Lorian"
                  required
                />
              </div>
            </div>
            <div className="order1-form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="order1-form-group">
              <label htmlFor="phone">Phone number (optional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="06 40 56 84 12"
              />
            </div>
            <div className="order1-form-hint">We'll only use your phonenumber to call you about your order</div>
            <button type="submit" className="order1-next-btn">Next step</button>
          </form>
        </div>
        <div className="order1-summary-wrapper">
          <div className="order1-summary">
            <div className="order1-summary-title">Your order</div>
            <div className="order1-summary-list">
              {cartProducts.map((item, idx) => (
                <div className="order1-summary-item" key={idx}>
                  <span className="order1-summary-qty">1</span>
                  <span className="order1-summary-name">{item.title}</span>
                  <span className="order1-summary-price">€ {item.price.toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="order1-summary-total-row">
              <span>Total</span>
              <span className="order1-summary-total">€ {orderTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order1;