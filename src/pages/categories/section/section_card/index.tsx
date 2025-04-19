import React from "react"

interface Props{
    img:string;
    title:string
}

const CategSectionCard:React.FC<Props>=({img, title}):React.ReactElement=>{
    return(<>
        <div className="categories-section-card">
            <img className="categories-section-card-img" src={img} alt=""/>
            <a href="categories.html" className="categories-section-card-link">{title}</a>
        </div>
        </>)
}

export default CategSectionCard