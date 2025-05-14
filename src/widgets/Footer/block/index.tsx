import React from "react";
import { Link } from "react-router-dom"; // Импортируем Link

interface Props{
    footer_title :string;
    title :string;
    link1 :string;
    link_title1 :string;
    link2 :string;
    link_title2 :string;
    link3 :string;
    link_title3 :string;
    }
    
    const Footer_Block:React.FC<Props>=({footer_title, title, link1, link_title1, link2, link_title2, link3, link_title3}): React.ReactElement =>{
    return(<>
        <div className={`footer-block ${footer_title}`}> {/* шаблонные строки (template literals) */}
            <h2 className="footer-title">{title}</h2>
            <a href={link1} className="footer-link">{link_title1}</a>
            <a href={link2} className="footer-link">{link_title2}</a>
            <a href={link3} className="footer-link">{link_title3}</a>
        </div>
        </>
    )
    }
    
    export default Footer_Block