import React from "react"

const Header=(): React.ReactElement =>{
    return(<>
            <header className="header container">
                <a href="index.html"><img className="logo" src="img/logo.svg" alt=""/></a>
                <a href="index.html" className="header-a btn-home">Home</a>
                <a href="index.html" className="header-a btn-all-restaurants">All restaurants</a>
                <a href="index.html" className="header-a btn-shop"><img className="shop" src="img/shop.svg" alt=""/></a>
            </header>
        </>
    )
}

export default Header