import React from "react"
import Footer_Block from "./block"

interface Props{
    logo: string;
}

const Footer:React.FC<Props>=({logo}):React.ReactElement =>{
    return(
        <>
            <div className="footer">
                <img className="logo-in-footer" src={logo} alt=""/>
                <Footer_Block footer_title="discover-us" title="Discover us" link1 = "index.html" link_title1="Home" link2 = "categories.html" link_title2="Categories" link3 = "index.html" link_title3="About"/>
                <Footer_Block footer_title="social-media" title="Our social media" link1 = "https://www.facebook.com" link_title1="Facebook" link2 = "https://www.instagram.com" link_title2="Instagram" link3 = "https://www.twitter.com" link_title3="Twitter"/>
                <Footer_Block footer_title="our-apps" title="Check our apps" link1 = "index.html" link_title1="Link" link2 = "index.html" link_title2="Link" link3 = "index.html" link_title3="Link"/>
            </div>
        </>
    )
}

export default Footer