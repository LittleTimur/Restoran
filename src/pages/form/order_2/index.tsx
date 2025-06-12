import React, { useState } from 'react';
import Header from '../../../widgets/header';
import './style.css';
import '../order/style.css'
import { useNavigate } from 'react-router-dom';
import OrderShop from '../order-shop';

interface FormData {
    streetName: string;
    houseNumber: string;
    zipcode: string;
    city: string;
}

const Order2 = (): React.ReactElement => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    streetName: '',
    houseNumber: '',
    zipcode: '',
    city: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePreviousStep = (): void => {
    navigate('/order/1');
  };

  const handlePlaceOrder = (): void => {
    // Здесь будет логика отправки заказа
    navigate('/order/3');
  };

  return (
    <>
      <Header />
      <div className="order-banner">
        <div className="order-banner-title">Your order at restaurant.name</div>
      </div>
      <div className="order-main-row">
        <div className="order-form-wrapper">
          <form className="order-form">
            <div className="order-form-header-row">
              <div className="order-form-title">Delivery details</div>
              <div className="order-form-step">Step 2 of 3</div>
            </div>
            <div className="order-form-underline">
              <div className="order-form-underline-1 line-on-order2"/>
              <div className="order-form-underline-2"/>
            </div>
            <div className="order-form-row">
              <div className="order-form-group order-form-group-1">
                <label htmlFor="streetName">Streetname</label>
                <input
                  type="text"
                  id="streetName"
                  name="streetName"
                  value={formData.streetName}
                  onChange={handleChange}
                  placeholder='“5th avenue”'
                  required
                />
              </div>
              <div className="order-form-group  order-form-group-2">
                <label htmlFor="houseNumber">House number</label>
                <input
                  type="text"
                  id="houseNumber"
                  name="houseNumber"
                  value={formData.houseNumber}
                  onChange={handleChange}
                  placeholder="“8B”"
                  required
                />
              </div>
            </div>
            <div className="order-form-row order-form-row-2">
              <div className="order-form-group">
                <label htmlFor="zipcode">Zipcode</label>
                <input
                  type="text"
                  id="zipcode"
                  name="zipcode"
                  value={formData.zipcode}
                  onChange={handleChange}
                  placeholder='“1234AB”'
                  required
                />
              </div>
              <div className="order-form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="“Amsterdam”"
                  required
                />
              </div>
            </div>
            <div className="order-form-buttons">
                <button 
                    type="button" 
                    className="order-next-btn btn-white" 
                    onClick={handlePreviousStep}
                >
                    Previous step
                </button>
                <button 
                    type="button" 
                    className="order-next-btn" 
                    onClick={handlePlaceOrder}
                >
                    Place order
                </button>
            </div>
          </form>
        </div>
        <OrderShop/>
      </div>
    </>
  );
};

export default Order2;