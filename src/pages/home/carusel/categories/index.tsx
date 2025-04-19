import React from "react"
import Card from "./card"

const Carusel_Categories=():React.ReactElement =>{
    return(<>
            <div className="categories">
                <h2 className="categories-title">Categories</h2>
                <div className="categories-container">
                    <Card img="img/categories-img-1.png" title="Pizza"/>
                    <Card img="img/categories-img-1.png" title="Pizza"/>
                    <Card img="img/categories-img-1.png" title="Pizza"/>
                    <Card img="img/categories-img-1.png" title="Pizza"/>
                    <Card img="img/categories-img-1.png" title="Pizza"/>
                    <Card img="img/categories-img-1.png" title="Pizza"/>
                    <Card img="img/categories-img-1.png" title="Pizza"/>
                    <Card img="img/categories-img-1.png" title="Pizza"/>
                    <Card img="img/categories-img-1.png" title="Pizza"/>
                    <Card img="img/categories-img-1.png" title="Pizza"/>
                    <Card img="img/categories-img-1.png" title="Pizza"/>
                    <Card img="img/categories-img-1.png" title="Pizza"/>
                    <Card img="img/categories-img-1.png" title="Pizza"/>
                    <Card img="img/categories-img-1.png" title="Pizza"/>
                    <Card img="img/categories-img-1.png" title="Pizza"/>
                </div>
                <button className="btn-right btn-cat"><img className="arrow-right" src="img/arrow-right.svg" alt=""/>
                </button>
                <button className="btn-left btn-cat"><img className="arrow-left" src="img/arrow-left.svg" alt=""/>
                </button>
                <div className="all-categories"><a href="categories.html" className="btn-all-categories">View all
                    categories</a></div>
            </div>
        </>
    )
}

export default Carusel_Categories