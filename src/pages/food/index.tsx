import React from 'react'
import Header from '../../widgets/header'
import Footer from '../../widgets/Footer'


const Food = (): React.ReactElement =>{
    return(<>
    <Header/>
    <div className='topbanner'>
        <img className="banner-photo" src='img/food.png' alt=""/>
        <div className='banner-title'>Pizza</div>
    </div>
    <Footer logo="img/logo-in-footer.svg"/>
    </>)
}

export default Food;