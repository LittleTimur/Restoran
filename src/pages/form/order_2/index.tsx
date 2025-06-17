import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
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

interface FormErrors {
    streetName?: string;
    houseNumber?: string;
    zipcode?: string;
    city?: string;
}

const Order2 = (): React.ReactElement => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    streetName: '',
    houseNumber: '',
    zipcode: '',
    city: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateZipcode = (zipcode: string): boolean => {
    // Формат почтового индекса: 6 цифр
    const zipcodeRegex = /^[0-9]{6}$/;
    return zipcodeRegex.test(zipcode);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Валидация названия улицы
    if (!formData.streetName.trim()) {
      newErrors.streetName = 'Street name is required';
    } else if (formData.streetName.trim().length < 3) {
      newErrors.streetName = 'Street name must be at least 3 characters';
    }

    // Валидация номера дома
    if (!formData.houseNumber.trim()) {
      newErrors.houseNumber = 'House number is required';
    } else if (!/^[0-9]+[A-Za-z]?$/.test(formData.houseNumber.trim())) {
      newErrors.houseNumber = 'Please enter a valid house number';
    }

    // Валидация почтового индекса
    if (!formData.zipcode.trim()) {
      newErrors.zipcode = 'Zipcode is required';
    } else if (!validateZipcode(formData.zipcode.trim())) {
      newErrors.zipcode = 'Please enter a valid 6-digit zipcode';
    }

    // Валидация города
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    } else if (formData.city.trim().length < 2) {
      newErrors.city = 'City must be at least 2 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Очищаем ошибку при вводе
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handlePreviousStep = (): void => {
    navigate('/order/1');
  };

  const handlePlaceOrder = (): void => {
    if (validateForm()) {
      // Здесь будет логика отправки заказа
      navigate('/order/3');
    }
  };

  return (
    <>
      <Helmet>
        <title>Delivery Details - Order | MealDrop</title>
        <meta name="description" content="Enter your delivery address to complete your order on MealDrop" />
      </Helmet>
      <Header />
      <div className="order-banner">
        <div className="order-banner-title">Your order</div>
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
                  placeholder='"5th avenue"'
                  className={errors.streetName ? 'error' : ''}
                />
                {errors.streetName && <span className="error-message">{errors.streetName}</span>}
              </div>
              <div className="order-form-group  order-form-group-2">
                <label htmlFor="houseNumber">House number</label>
                <input
                  type="text"
                  id="houseNumber"
                  name="houseNumber"
                  value={formData.houseNumber}
                  onChange={handleChange}
                  placeholder='"8B"'
                  className={errors.houseNumber ? 'error' : ''}
                />
                {errors.houseNumber && <span className="error-message">{errors.houseNumber}</span>}
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
                  placeholder='"123456"'
                  className={errors.zipcode ? 'error' : ''}
                />
                {errors.zipcode && <span className="error-message">{errors.zipcode}</span>}
              </div>
              <div className="order-form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder='"Amsterdam"'
                  className={errors.city ? 'error' : ''}
                />
                {errors.city && <span className="error-message">{errors.city}</span>}
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