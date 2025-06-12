import React, { useState } from 'react';
import Header from '../../../widgets/header';
import './style.css';
import '../order/style.css'
import { useAppSelector } from '../../../data/store';
import { selectCartProducts, selectCartTotal } from '../../../data/slices/cart';
import { useNavigate } from 'react-router-dom';
import OrderShop from '../order-shop';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const Order1 = (): React.ReactElement => {
    const navigate = useNavigate();
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
    navigate('/order/2');
  };

  return (
    <>
      <Header />
      <div className="order-banner">
        <div className="order-banner-title">Your order</div>
      </div>
      <div className="order-main-row">
        <div className="order-form-wrapper">
          <form onSubmit={handleSubmit} className="order-form">
            <div className="order-form-header-row">
              <div className="order-form-title">Contact details</div>
              <div className="order-form-step">Step 1 of 3</div>
            </div>
            <div className="order-form-underline">
              <div className="order-form-underline-1"/>
              <div className="order-form-underline-2"/>
            </div>
            <div className="order-form-row">
              <div className="order-form-group">
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
              <div className="order-form-group">
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
            <div className="order-form-group order-form-group-width">
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
            <div className="order-form-group order-form-group-width">
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
            <div className="order-form-hint">We'll only use your phonenumber to call you about your order</div>
            <button type="submit" className="order-next-btn">Next step</button>
          </form>
        </div>
        <OrderShop />
      </div>
    </>
  );
};

export default Order1;