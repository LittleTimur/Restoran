import React from "react"

interface Props{
    img: string;
    title: string;
}

const Card:React.FC<Props>=({img, title}): React.ReactElement=>{
    return(<>
            <div className="categories-card">
                <img className="categories-card-img" src={img} alt=""/>
                <a href="index.html" className="categories-card-title">{title}</a>
            </div>
        </>
    )
}

export default Card