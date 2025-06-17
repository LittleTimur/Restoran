import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../../widgets/Footer';
import Header from '../../widgets/header';
import { useParams } from 'react-router-dom';
import RestoranAbout from './about';
import RestoranSection from './section';
import './style.css';

const mainDishes = [
    {
        title: "Margherita Pizza",
        description: "Classic pizza with fresh tomatoes, mozzarella, and basil",
        price: 12.99
    },
    {
        title: "Spaghetti Carbonara",
        description: "Pasta with creamy sauce, pancetta, and parmesan cheese",
        price: 14.99
    },
    {
        title: "Grilled Salmon",
        description: "Fresh salmon fillet with lemon butter sauce and seasonal vegetables",
        price: 18.99
    },
    {
        title: "Chicken Alfredo",
        description: "Fettuccine pasta with grilled chicken in creamy parmesan sauce",
        price: 15.99
    }
];

const appetizers = [
    {
        title: "Caesar Salad",
        description: "Crispy romaine lettuce, parmesan cheese, croutons with Caesar dressing",
        price: 8.99
    },
    {
        title: "Bruschetta",
        description: "Toasted bread topped with fresh tomatoes, garlic, and basil",
        price: 6.99
    },
    {
        title: "Garlic Bread",
        description: "Crispy bread with garlic butter and herbs",
        price: 5.99
    },
    {
        title: "Caprese Salad",
        description: "Fresh mozzarella, tomatoes, and basil with balsamic glaze",
        price: 9.99
    }
];

const desserts = [
    {
        title: "Tiramisu",
        description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream",
        price: 6.99
    },
    {
        title: "Chocolate Lava Cake",
        description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
        price: 7.99
    },
    {
        title: "Panna Cotta",
        description: "Italian dessert with vanilla cream and berry sauce",
        price: 6.99
    },
    {
        title: "Cheesecake",
        description: "Classic New York style cheesecake with berry compote",
        price: 7.99
    }
];

const RestoranPage = (): React.ReactElement => {
  const { restoran } = useParams<{ restoran: string }>();
  
  const capitalizeWords = (str: string): string => {
    return str.split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };
  
  const restoranTitle = restoran ? capitalizeWords(restoran) : '';
  const { category } = useParams<{ category: string }>();
  const categoryTitle = category ? capitalizeWords(category) : '';
  return (
    <>
      <Helmet>
        <title>{restoranTitle} - Restaurant | MealDrop</title>
        <meta name="description" content={`Order delicious food from ${restoranTitle} restaurant. Fast delivery and great prices on MealDrop.`} />
      </Helmet>
      <Header />
      <div className="restoran-top-banner">
        <img className="restoran-banner-photo" src={`/img/restoran-title-mira.png`} alt="" />
        <div className="restoran-banner-title">{restoranTitle}</div>
      </div>
      <RestoranAbout title={restoran || ''} titleTo={restoranTitle || ''} link={category || ''} linkTitle = {categoryTitle || ''} />
      <RestoranSection title="Main Dishes" dishes={mainDishes} />
      <RestoranSection title="Appetizers" dishes={appetizers} />
      <RestoranSection title="Desserts" dishes={desserts} />
      <Footer />
    </>
  );
};

export default RestoranPage;
