import React from "react"
import CategSectionCard from "./section_card"

const CategSection=():React.ReactElement=>{
    return(<>
    <div className="categories-section">
        <CategSectionCard img ="img/categories-section-card-pizz.png" title="Pizza"/>
        <CategSectionCard img ="img/categories-section-card-pizz.png" title="Pizza"/>
        <CategSectionCard img ="img/categories-section-card-pizz.png" title="Pizza"/>
        <CategSectionCard img ="img/categories-section-card-pizz.png" title="Pizza"/>
        <CategSectionCard img ="img/categories-section-card-pizz.png" title="Pizza"/>
        <CategSectionCard img ="img/categories-section-card-pizz.png" title="Pizza"/>
    </div>
        </>)
}

export default CategSection