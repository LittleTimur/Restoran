import React from "react"
import Card from "../card"

const Carusel_Pick=():React.ReactElement =>{
    return(<>
            <div className="favourite-picks">
                <h2 className="favourite-picks__title">Our favourite picks</h2>
                <div className="favourite-picks-container">
                    <Card img="img/pick_img.png" title="Mira" review_text="4.2  Very Good"/>
                    <Card img="img/pick_img.png" title="Kara Fin" review_text="4.2  Very Good"/>
                    <Card img="img/pick_img.png" title="‘T Kuyltje" review_text="4.2  Very Good"/>
                    <Card img="img/pick_img.png" title="Пупупу" review_text="4.9  Very Good"/>
                    <Card img="img/pick_img.png" title="Лалала" review_text="4.9  Very Good"/>
                    <Card img="img/pick_img.png" title="Я ем людей" review_text="5.0  Very Good"/>
                </div>
                <button className="btn-right"><img className="arrow-right" src="img/arrow-right.svg" alt=""/></button>
                <button className="btn-left"><img className="arrow-left" src="img/arrow-left.svg" alt=""/></button>
            </div>
        </>
    )
}

export default Carusel_Pick